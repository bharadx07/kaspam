import { Request, Response } from "express";

import payload from "../../utils/payload";
import workerForm from "../../utils/workerform";
import workers from "../../utils/workers";

export default function addBot(req: Request, res: Response) {
  const data = workerForm(payload(req));

  try {
    workers.w1.postMessage(data);
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
