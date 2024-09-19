import mongoose from "mongoose";
import Workout from "../models/workoutModel.js";

const getWorkouts = async (req, res) => {
  try {
    const workout = await Workout.find({});
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such workout" });
  try {
    const workout = await Workout.findById(id);
    if (!workout) return res.status(404).json({ error: "No such workout" });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such workout" });
  try {
    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) return res.status(404).json({ error: "No such workout" });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such workout" });

  try {
    const workout = await Workout.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (!workout) return res.status(404).json({ error: "No such workout" });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout };
