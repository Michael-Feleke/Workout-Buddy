import "express-async-errors";

import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import workoutRouter from "./routes/workoutRoutes.js";

import { connectDB } from "./config/database.js";
import { MORGAN_FORMAT, PORT } from "./utils/constants.js";
import { globalErrorHandler } from "./controllers/errorController.js";
import { requireAuth } from "./middlewares/authMiddleware.js";
import { handleUncaughtExceptions } from "./errors/uncaughtExceptions.js";
import { handleUnhandledRejections } from "./errors/unhandledRejections.js";
import logger from "./config/logger.js";

// Setup uncaught exception handling
handleUncaughtExceptions();

//express app
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan(MORGAN_FORMAT));

//authentication
app.use("/auth", authRouter);
app.use(requireAuth);

//api
app.use("/api/user", userRouter);
app.use("/api/workout/", workoutRouter);

//Error handler
app.use(globalErrorHandler);

// DB connection
const startServer = async () => {
  try {
    await connectDB();
    const server = app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });

    handleUnhandledRejections(server);
  } catch (error) {
    logger.error(`Failed to connect to the database: ${error.message}`);
    process.exit(1);
  }
};

// Start server
startServer();
