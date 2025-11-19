import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: google("gemma-3-12b-it"),
    messages: convertToModelMessages(messages),
  });
  return result.toUIMessageStreamResponse();
}
