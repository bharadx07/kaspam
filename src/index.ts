import express, { Application } from "express";
import { createServer } from "http";

import router from "./modules/routers";

const app: Application = express();
const server = createServer(app);

app.use(express.json());
app.use(router);

server.listen(8080, () => {
  console.log("Server Running at PORT 8080");
});
