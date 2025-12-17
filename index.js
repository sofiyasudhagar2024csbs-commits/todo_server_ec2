import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./Routes/todoRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 👇 VERY IMPORTANT
app.use("/csbs", todoRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});