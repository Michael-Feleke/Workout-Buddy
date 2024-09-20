import mongoose from "mongoose";
import { MONGO_URI } from "../utils/constants";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
