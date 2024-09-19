import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ msg: "GET request fro workouts" });
});

router.post("/", (req, res) => {
  res.send({ msg: "POST request fro workouts" });
});

router.delete("/:id", (req, res) => {
  res.send({ msg: "DELETE request fro workouts" });
});

router.put("/:id", (req, res) => {
  res.send({ msg: "PUT request fro workouts" });
});

export default router;
