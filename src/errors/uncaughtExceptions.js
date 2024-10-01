import logger from "../config/logger.js";
import mongoose from "mongoose";
export const handleUncaughtExceptions = () => {
  process.on("uncaughtException", async (error) => {
    logger.error(`Uncaught Exception: ${error.message}`, {
      stack: error.stack,
    });
    const shutdown = async () => {
      try {
        await mongoose.connection.close();
        logger.info("MongoDB connection closed.");
      } catch (shutdownError) {
        logger.error(`Error during MongoDB shutdown: ${shutdownError.message}`);
      } finally {
        setTimeout(() => {
          process.exit(1);
        }, 100);
      }
    };

    await shutdown();
  });
};
