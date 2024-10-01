import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
} from "../controllers/workoutController.js";
import { validateWorkout } from "../validation/validateWorkout.js";

const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", validateWorkout, createWorkout);

router.delete("/:id", deleteWorkout);

router.put("/:id", updateWorkout);

export default router;
