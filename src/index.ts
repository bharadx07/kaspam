import express, { Response, Request, Application } from "express";
import { createServer } from "http";

import payload from "./modules/payload";
import workerForm from "./modules/workerform";
import workers from "./modules/workers";

const app: Application = express();
const server = createServer(app);

app.use(express.json());

app.get("/", (_, res: Response) => {
  res.sendFile("views/index.html", { root: "./src" });
});

app.post("/send-bot", (req: Request, res: Response) => {
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
});

server.listen(8080, () => {
  console.log("Server Running at PORT 8080");
});
