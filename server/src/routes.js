import { Router } from "express";
import {
  register,
  login,
  refreshToken,
  logout,
} from "./controllers/user.controller.js";
import { authenticateToken } from "./middlewares/authenticateToken.js";

const router = Router();

router.post("/users/register", register);
router.post("/users/login", login);
router.post("/refresh", refreshToken);
router.delete("/logout", logout);

router.get("/verify", authenticateToken, (req, res) => res.json(req.user));


export default router;
