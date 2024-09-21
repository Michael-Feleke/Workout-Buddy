import mongoose from "mongoose";
import workoutSchema from "./schema.js";

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;
