import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
} from "../controllers/workoutController.js";
import { validateWorkout } from "../validation/validateWorkout.js";
import { catchAsync } from "../utils/catchAsync.js";

const router = express.Router();

router.get("/", catchAsync(getWorkouts));

router.get("/:id", catchAsync(getWorkout));

router.post("/", validateWorkout, catchAsync(createWorkout));

router.delete("/:id", catchAsync(deleteWorkout));

router.put("/:id", catchAsync(updateWorkout));

export default router;
