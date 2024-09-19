import express from "express";
import Workout from "../models/workoutModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ msg: "GET request fro workouts" });
});

router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.send({ msg: "DELETE request fro workouts" });
});

router.put("/:id", (req, res) => {
  res.send({ msg: "PUT request fro workouts" });
});

export default router;
