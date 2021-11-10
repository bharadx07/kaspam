import express, { Response } from "express";

const router = express.Router();
const options = { root: "./src" };

router.route("/").get((_, res: Response) => {
  res.sendFile("views/index.html", options);
});

router.route("/offline").get((_, res: Response) => {
  res.sendFile("public/static/offline/offline.html", options)
})

router.route("/worker").get((_, res: Response) => {
  res.sendFile("public/static/scripts/sworker.js", options)
})

export default router;
  