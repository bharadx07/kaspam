import express, { Application } from "express";
import { createServer } from "http";

import router from "./modules/routers";

import logger from "morgan";

const app: Application = express();
const server = createServer(app);

app.use(logger("dev"));
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
  console.log("Server Running at PORT 8080");
});
