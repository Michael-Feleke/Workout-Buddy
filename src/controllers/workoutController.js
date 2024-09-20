import Workout from "../models/workout/model.js";
import { isValidMongoId } from "../utils/isValidMongoId.js";

const getWorkouts = async (req, res, next) => {
  const workout = await Workout.getAllWorkouts();
  res.status(200).json(workout);
};

const getWorkout = async (req, res, next) => {
  const { id } = req.params;
  if (!isValidMongoId(id))
    return res.status(404).json({ error: "No such workout" });

  const workout = await Workout.getSingleWorkout(id);
  if (!workout) return res.status(404).json({ error: "No such workout" });
  res.status(200).json(workout);
};

const createWorkout = async (req, res, next) => {
  const { title, reps, load } = req.body;
  const newWorkout = { title, reps, load };

  const workout = await Workout.createNewWorkout(newWorkout);
  res.status(200).json(workout);
};

const deleteWorkout = async (req, res, next) => {
  const { id } = req.params;

  if (!isValidMongoId(id))
    return res.status(404).json({ error: "No such workout" });

  const workout = await Workout.deleteSingleWorkout(id);
  if (!workout) return res.status(404).json({ error: "No such workout" });
  res.status(200).json(workout);
};

const updateWorkout = async (req, res, next) => {
  const { id } = req.params;
  const updatedWorkout = { ...req.body };

  if (!isValidMongoId(id))
    return res.status(404).json({ error: "No such workout" });

  const workout = await Workout.updateWorkout(id, updatedWorkout);
  if (!workout) return res.status(404).json({ error: "No such workout" });
  res.status(200).json(workout);
};

export { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout };
