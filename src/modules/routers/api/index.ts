import express from "express";
import addBot from "./bots";

const router = express.Router();

router.route("/add-bot").post(addBot);

export default router;
