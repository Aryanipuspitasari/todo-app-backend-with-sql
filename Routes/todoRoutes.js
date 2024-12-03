import express from "express";
import * as taskController from "../Controller/taskController.js";

const todoRouter = express.Router();

todoRouter.post('/', taskController.addTaskController);
todoRouter.get('/', taskController.getAllTasksController);
todoRouter.get('/:id', taskController.getTaskByIdController);
todoRouter.put('/:id', taskController.updateTaskByIdController);
todoRouter.delete('/:id', taskController.deleteTaskByIdController);

export default todoRouter;
