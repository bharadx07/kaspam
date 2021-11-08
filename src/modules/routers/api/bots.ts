import { Request, Response } from "express";

import payload from "../../utils/payload";
import workerForm from "../../utils/workerform";
import workers from "../../utils/workers";

export default function addBot(req: Request, res: Response) {
  const data = workerForm(payload(req));

  const mainCount = Math.floor(payload(req).botCount / 10);
  const specialAddOn = payload(req).botCount % 10;

  const normalWorker = [data[0], data[1], mainCount];
  const specialWorker = [data[0], data[1], mainCount + specialAddOn];

  try {
    workers.w1.postMessage(specialWorker);
    workers.w2.postMessage(normalWorker);
    workers.w3.postMessage(normalWorker);
    workers.w4.postMessage(normalWorker);
    workers.w5.postMessage(normalWorker);
    workers.w6.postMessage(normalWorker);
    workers.w7.postMessage(normalWorker);
    workers.w8.postMessage(normalWorker);
    workers.w9.postMessage(normalWorker);
    workers.w10.postMessage(normalWorker);

    res.status(200).send({
      status: 200,
      message: "Successfully Added Bots!",
    });
  } catch {
    res.status(400).send({
      status: 400,
      mesage: "Internal Server Error",
    });
  }
}
  