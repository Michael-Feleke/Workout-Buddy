import express from "express";
import workoutRouter from "./routes/workout.js";
import { connectDB } from "./config/database.js";
import { PORT } from "./utils/constants.js";

//express app
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/workout/", workoutRouter);

// Port setup
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Failed to connect to database: ${error.message}`);
  });
