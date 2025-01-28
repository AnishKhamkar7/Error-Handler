import TodoController from "./todo";
import { Router } from "express";
import ErrorManager from "./ErrorManager";

const router = Router();

const todoController = new TodoController();
router.route("/api/todos").get(ErrorManager.handle(todoController.getTodo));

export default router;
