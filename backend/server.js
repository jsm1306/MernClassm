import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import WorkoutRoutes from "./routes/workouts.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/workouts", WorkoutRoutes);
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
      console.log("Mongodb connection established");
    });
  })
  .catch((error) => {
    console.log(error);
  });
