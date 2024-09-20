import mongoose from "mongoose";
import workoutSchema from "./schema";

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;
