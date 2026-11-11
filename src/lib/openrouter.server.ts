// Thin OpenRouter client (OpenAI-compatible API). Server-only: reads OPENROUTER_API_KEY.
const BASE_URL = "https://openrouter.ai/api/v1";

export const CHAT_MODEL = process.env["OPENROUTER_MODEL"] || "google/gemini-2.5-flash";
export const EMBED_MODEL = process.env["OPENROUTER_EMBED_MODEL"] || "openai/text-embedding-3-small";

export class OpenRouterError extends Error {
  constructor(
    message: string,
    readonly httpStatus: number,
  ) {
    super(message);
  }
}

export type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

async function post(path: string, body: unknown, signal?: AbortSignal): Promise<Response> {
  const key = process.env["OPENROUTER_API_KEY"];
  if (!key) throw new OpenRouterError("OPENROUTER_API_KEY is not set", 500);
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    signal: signal ?? null,
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      "X-Title": "Visit Denmark",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new OpenRouterError(`OpenRouter ${res.status}: ${(await res.text()).slice(0, 500)}`, res.status);
  }
  return res;
}

/** Streams assistant text deltas from a chat completion. */
export async function* streamChat(messages: ChatMessage[], signal?: AbortSignal): AsyncGenerator<string> {
  const res = await post("/chat/completions", { model: CHAT_MODEL, messages, stream: true }, signal);
  const reader = res.body!.pipeThrough(new TextDecoderStream()).getReader();
  let buf = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += value;
    let nl: number;
    while ((nl = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, nl).trim();
      buf = buf.slice(nl + 1);
      if (!line.startsWith("data:")) continue; // skips ": OPENROUTER PROCESSING" keep-alives
      const data = line.slice(5).trim();
      if (data === "[DONE]") return;
      const json = JSON.parse(data) as {
        error?: { message?: string };
        choices?: { delta?: { content?: string } }[];
      };
      if (json.error) throw new OpenRouterError(json.error.message ?? "stream error", 502);
      const delta = json.choices?.[0]?.delta?.content;
      if (delta) yield delta;
    }
  }
}

/** Non-streaming completion constrained to a JSON schema; returns the raw JSON text. */
export async function completeJson(
  messages: ChatMessage[],
  name: string,
  schema: unknown,
): Promise<string> {
  const res = await post("/chat/completions", {
    model: CHAT_MODEL,
    messages,
    response_format: { type: "json_schema", json_schema: { name, strict: true, schema } },
  });
  const json = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  const text = json.choices?.[0]?.message?.content;
  if (!text) throw new OpenRouterError("Empty completion", 502);
  return text;
}

export async function embed(texts: string[]): Promise<number[][]> {
  const res = await post("/embeddings", { model: EMBED_MODEL, input: texts });
  const json = (await res.json()) as { data: { index: number; embedding: number[] }[] };
  return [...json.data].sort((a, b) => a.index - b.index).map((d) => d.embedding);
}
