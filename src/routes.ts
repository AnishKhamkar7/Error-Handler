import TodoController from "./todo";
import { Router } from "express";

const router = Router();

const todoController = new TodoController();
router.route("/api/todos").get(todoController.getTodo);

export default router;
