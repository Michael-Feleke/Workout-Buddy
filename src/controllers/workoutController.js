import Workout from "../models/workout/index.js";
import AppError from "../utils/appError.js";
import { isValidMongoId } from "../utils/isValidMongoId.js";

const getWorkouts = async (req, res, next) => {
  const workout = await Workout.getAllWorkouts();
  throw new Error("get workouts error");
  res.status(200).json(workout);
};

const getWorkout = async (req, res, next) => {
  const { id } = req.params;
  if (!isValidMongoId(id)) return next(new AppError("Invalid workout id", 400));

  const workout = await Workout.getSingleWorkout(id);
  if (!workout) return next(new AppError("No such workout", 404));

  res.status(200).json(workout);
};

const createWorkout = async (req, res, next) => {
  const user = req.foundUser;
  const { title, reps, load } = req.body;
  const newWorkout = { title, reps, load, createdBy: user._id };

  const workout = await Workout.createNewWorkout(newWorkout);
  res.status(200).json(workout);
};

const deleteWorkout = async (req, res, next) => {
  const { id } = req.params;

  if (!isValidMongoId(id)) return next(new AppError("Invalid workout id", 400));

  const workout = await Workout.deleteSingleWorkout(id);
  if (!workout) return next(new AppError("No such workout", 404));

  res.status(200).json(workout);
};

const updateWorkout = async (req, res, next) => {
  const { id } = req.params;
  const updatedWorkout = { ...req.body };

  if (!isValidMongoId(id)) return next(new AppError("Invalid workout id", 400));

  const workout = await Workout.updateWorkout(id, updatedWorkout);
  if (!workout) return next(new AppError("No such workout", 404));

  res.status(200).json(workout);
};

export { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout };
