import express from "express";
import {
  logInUser,
  logOutUser,
  singUpUser,
} from "../controllers/authController";
import { catchAsync } from "../utils/catchAsync.js";

const router = express.Router();

router.post("/sign-up", catchAsync(singUpUser));
router.post("/log-in", catchAsync(logInUser));
router.get("/log-out", catchAsync(logOutUser));

export default router;
