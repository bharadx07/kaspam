import { BotPayload } from "./payload";

export default function workerForm(payload: BotPayload) {
  return [payload.gameKey, payload.botName, payload.botCount];
}
