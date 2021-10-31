import { Request } from "express";

export type BotPayload = {
  gameKey: number;
  botName: string;
  botCount: number;
};

export default function payload(request: Request) {
  const raw = request.body as any;
  return raw as BotPayload;
}
