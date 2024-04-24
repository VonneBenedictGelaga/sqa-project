import { Router } from "express";
import {
  register,
  login,
  refreshToken,
  logout,
} from "./controllers/auth.controller.js";
import { authenticateToken } from "./middlewares/authenticateToken.js";

const router = Router();

// Auth
router.post("/register", register);
router.post("/login", login);
router.get("/refresh", refreshToken);
router.delete("/logout", authenticateToken, logout);
router.get("/verify", authenticateToken, (req, res) => res.json(req.user));




export default router;
