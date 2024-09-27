import express from "express";
import authRouter from "./routes/authRoutes.js";
import workoutRouter from "./routes/workoutRoutes.js";
import { connectDB } from "./config/database.js";
import { PORT } from "./utils/constants.js";
import { globalErrorHandler } from "./controllers/errorController.js";
import cookieParser from "cookie-parser";
import { requireAuth } from "./middlewares/authMiddleware.js";

//express app
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//authentication
app.use("/auth", authRouter);
app.use(requireAuth);

//api
app.use("/api/workout/", workoutRouter);

//Error handler
app.use(globalErrorHandler);

// DB connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Failed to connect to the database: ${error.message}`);
    process.exit(1);
  });
