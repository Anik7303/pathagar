import express from "express";

import { test } from "../controllers/test";

const router = express.Router();

router.route("/test").get(test);

export default router;
