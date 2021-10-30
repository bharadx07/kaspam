import express, { Response } from "express";
const app = express();
import { createServer } from "http";
const server = createServer(app);

import { Worker } from "worker_threads";

app.get("/", (_, res: Response) => {
  res.sendFile("views/index.html", { root: "./src" });
});

server.listen(8080, () => {
  console.log("Server Running at PORT 8080");
});


