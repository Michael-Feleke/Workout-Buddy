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
