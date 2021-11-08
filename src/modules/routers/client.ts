import express, { Response } from "express";

const router = express.Router();
const options = { root: "./src" };

router.route("/").get((_, res: Response) => {
  res.sendFile("views/index.html", options);
});

export default router;
