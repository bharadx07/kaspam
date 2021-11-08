import express from "express";

import api from "./api";
import client from "./client";
import statics from "./static";

const router = express.Router();

router.use(statics);
router.use(client);
router.use("/api", api);

export default router;
