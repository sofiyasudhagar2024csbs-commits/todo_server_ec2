import express from "express";
import {
  addToDo,
  getToDo,
  updateToDo,
  deleteToDo,
} from "../Controller/todoController.js";

console.log("✅ todoRoutes loaded"); // 🔥 ADD THIS

const router = express.Router();

router.post("/addtodo", addToDo);
router.get("/gettodo", getToDo);
router.put("/updatetodo/:id", updateToDo);
router.delete("/deletetodo/:id", deleteToDo);

export default router;