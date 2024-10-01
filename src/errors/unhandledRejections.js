import logger from "../config/logger.js";
import mongoose from "mongoose";

export const handleUnhandledRejections = (server) => {
  process.on("unhandledRejection", async (reason, promise) => {
    logger.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);

    const shutdown = async () => {
      try {
        await mongoose.connection.close();
        logger.info("MongoDB connection closed.");
      } catch (shutdownError) {
        logger.error(`Error during MongoDB shutdown: ${shutdownError.message}`);
      } finally {
        server.close(() => {
          process.exit(1);
        });
      }
    };

    await shutdown();
  });
};
