# Minimal To-Do List API

This is a tiny Express + Node.js API that stores todos in-memory.

Routes
- GET /todos → Return all tasks
- POST /todos → Add a new task. JSON body: { "task": "string" }
- PATCH /todos/:id → Mark task as done

Example PATCH response:
{
  "message": "Task updated",
  "todo": { "id":1, "task":"Learn Node", "done":true }
}

Run
1. Install dependencies: npm install
2. Start server: npm start

The server listens on port 3000 by default.
