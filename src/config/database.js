import mongoose from "mongoose";
import { MONGO_URI } from "../utils/constants.js";
import logger from "./logger.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    logger.info("MongoDB connected");

    mongoose.connection.on("connected", () => {
      logger.info("Mongoose connected to DB");
    });

    mongoose.connection.on("error", (err) => {
      logger.error(`Mongoose connection error: ${err.message}`);
    });

    mongoose.connection.on("disconnected", () => {
      logger.info("Mongoose disconnected");
    });
  } catch (error) {
    logger.error(`Initial connection Error: ${error.message}`);
    throw new Error("MongoDB connection failed!");
  }
};
