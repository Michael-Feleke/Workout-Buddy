import mongoose from "mongoose";
import * as Statics from "./statics.js";

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  },
});

workoutSchema.static(Statics);

export default workoutSchema;
