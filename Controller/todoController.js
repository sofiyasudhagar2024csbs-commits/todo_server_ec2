import Todo from "../Model/todoModel.js";

// ➕ Add Todo
export const addToDo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).json({ message: "Todo added successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 📥 Get Todos
export const getToDo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✏ Update Todo
export const updateToDo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ❌ Delete Todo
export const deleteToDo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};