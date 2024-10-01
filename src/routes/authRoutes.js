import express from "express";
import {
  logInUser,
  logOutUser,
  singUpUser,
} from "../controllers/authController.js";
import { authErrorHandler } from "../middlewares/authErrorHandler.js";
import { validateUser } from "../validation/validateUser.js";

const router = express.Router();

router.post("/sign-up", validateUser, singUpUser, authErrorHandler);
router.post("/log-in", validateUser, logInUser, authErrorHandler);
router.get("/log-out", logOutUser);

export default router;
