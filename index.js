const express = require('express');
const app = express();
app.use(express.json());

// In-memory storage
let todos = [];
let nextId = 1;

// GET /todos → Return all tasks
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST /todos → Add a new task from request body
app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (!task || typeof task !== 'string') {
    return res.status(400).json({ message: 'Invalid task' });
  }
  const todo = { id: nextId++, task, done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

// PATCH /todos/:id → Mark task as done
app.patch('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ message: 'Task not found' });
  }
  todo.done = true;
  res.json({ message: 'Task updated', todo });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
