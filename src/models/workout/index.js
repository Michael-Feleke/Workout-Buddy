import mongoose from "mongoose";
import workoutSchema from "./schema.js";
import * as Statics from "./statics.js";

workoutSchema.static(Statics);

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;
