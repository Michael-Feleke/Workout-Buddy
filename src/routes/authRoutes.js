import express from "express";
import {
  logInUser,
  logOutUser,
  singUpUser,
} from "../controllers/authController.js";
import { catchAsync } from "../utils/catchAsync.js";
import { signUpErrorHandler } from "../middlewares/signUpErrorHandler.js";

const router = express.Router();

router.post("/sign-up", catchAsync(singUpUser), signUpErrorHandler);
router.post("/log-in", catchAsync(logInUser));
router.get("/log-out", catchAsync(logOutUser));

export default router;
