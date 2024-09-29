import express from "express";
import {
  logInUser,
  logOutUser,
  singUpUser,
} from "../controllers/authController.js";
import { catchAsync } from "../utils/catchAsync.js";
import { authErrorHandler } from "../middlewares/authErrorHandler.js";
import { validateUser } from "../validation/validateUser.js";

const router = express.Router();

router.post("/sign-up", validateUser, catchAsync(singUpUser), authErrorHandler);
router.post("/log-in", validateUser, catchAsync(logInUser), authErrorHandler);
router.get("/log-out", catchAsync(logOutUser));

export default router;
