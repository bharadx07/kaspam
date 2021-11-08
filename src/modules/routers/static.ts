import express, { static as statics } from "express";

const router = express.Router();

const rootURL = __dirname + "/../../../src/public/root";
const staticURL = __dirname + "/../../../src/public/static";

router.use("/", statics(rootURL));
router.use("/static", statics(staticURL));

export default router;
