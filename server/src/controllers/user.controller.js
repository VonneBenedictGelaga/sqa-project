
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  limit,
} from "firebase/firestore";
import db from "../utils/firebase.js";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateAccessToken } from "../utils/generateAccessToken.js";

const userSchema = z.object({
  username: z
    .string({
      required_error: "username is required",
    })
    .min(3, "username too short - 3 chars minimum"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password too short - 6 chars minimum"),
});

let refreshTokens = [];

export async function register(req, res, next) {
  const { username, password } = req.body;

  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({
      message: result.error.issues,
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await addDoc(collection(db, "users"), {
      username,
      password: hashedPassword,
    });
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  const { username, password } = req.body;

  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({
      message: result.error.issues,
    });
  }

  try {
    const q = query(
      collection(db, "users"),
      where("username", "==", username),
      limit(1)
    );
    const querySnap = await getDocs(q);

    if (querySnap.empty) {
      res.sendStatus(401);
    }

    const user = querySnap.docs[0].data();

    if (await bcrypt.compare(password, user.password)) {

      const accessToken = generateAccessToken(user)
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

      refreshTokens.push(refreshToken)
      res.json({ accessToken, refreshToken })
    }
    res.sendStatus(401);
  } catch (err) {
    next(err);
  }
}

export function refreshToken (req, res, next) {
  const refreshToken = req.body.token;

  if (refreshToken == null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)

    const accessToken = generateAccessToken({ username: user.username })
    res.json({ accessToken })
  })
}


export function logout(req, res, next) {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
}