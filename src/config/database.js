import mongoose from "mongoose";
import { MONGO_URI } from "../utils/constants.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected");

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to DB");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`Mongoose connection error: ${err.message}`);
      throw new Error(err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected");
    });
  } catch (error) {
    console.log(`Initial connection Error: ${error.message}`);
    throw new Error("MongoDB connection failed!");
  }
};
