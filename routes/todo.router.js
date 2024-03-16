import { Router } from "express";
import TodoController from "../controller/todo.controller.js";
import authenticate from "../middleware/authenticate.js";

const todos = new TodoController();

const router = Router();

router.post("/", authenticate, todos.createTodoHandler);

router.get("/", authenticate, todos.getTodosHandler);

router.get("/:id", authenticate, todos.getTodoByIdHandler);

router.delete("/:id", authenticate, todos.deleteTodoByIdHandler);

export default router;
