import express from "express";
import { userLogin } from "../controller/auth.js";
const router = express.Router();

router.post("/login", userLogin);

export default router;
