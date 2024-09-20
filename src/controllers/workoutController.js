import mongoose from "mongoose";
import Workout from "../models/workout/model.js";
import { isValidMongoId } from "../utils/isValidMongoId.js";

const getWorkouts = async (req, res, next) => {
  const workout = await Workout.find({});
  res.status(200).json(workout);
};

const getWorkout = async (req, res, next) => {
  const { id } = req.params;
  if (!isValidMongoId(id))
    return res.status(404).json({ error: "No such workout" });

  const workout = await Workout.findById(id);
  if (!workout) return res.status(404).json({ error: "No such workout" });
  res.status(200).json(workout);
};

const createWorkout = async (req, res, next) => {
  const { title, reps, load } = req.body;

  const workout = await Workout.create({ title, reps, load });
  res.status(200).json(workout);
};

const deleteWorkout = async (req, res, next) => {
  const { id } = req.params;

  if (!isValidMongoId(id))
    return res.status(404).json({ error: "No such workout" });

  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) return res.status(404).json({ error: "No such workout" });
  res.status(200).json(workout);
};

const updateWorkout = async (req, res, next) => {
  const { id } = req.params;

  if (!isValidMongoId(id))
    return res.status(404).json({ error: "No such workout" });

  const workout = await Workout.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );
  if (!workout) return res.status(404).json({ error: "No such workout" });
  res.status(200).json(workout);
};

export { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout };
