import express from "express";
import dotenv from "dotenv";
import workoutRouter from "./routes/workout.js";
import { connectDB } from "./config/database.js";

dotenv.config();

//express app
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/workout/", workoutRouter);

// Port setup
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Failed to connect to database: ${error.message}`);
  });
