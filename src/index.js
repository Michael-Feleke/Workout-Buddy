import express from "express";
import dotenv from "dotenv";
import workoutRouter from "./routes/workout.js";

dotenv.config();

//express app
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes

app.use("/api/workout/", workoutRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
