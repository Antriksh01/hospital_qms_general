import express from "express";
import { userLogin } from "../controller/auth.js";
import { userRegs } from "../controller/auth.js";
import { verifyToken } from "../middleware/middleware.js";

const router = express.Router();

// Protected route
router.post("/protected", verifyToken, (req, res) => {
  // Access the authenticated user via req.user
  res.json({ message: "Protected route accessed", user: req.user });
});

router.post("/login", userLogin);
router.post("/register", userRegs);

export default router;
