import * as TaskModel from "../Models/taskModel.js";

// add task controller

export const addTaskController = (req, res, next) => {
    const {task_name} = req.body;

    if(!task_name) {
        return res.status(400).json({ error: 'Task name is required' });
    } 

    TaskModel.addTask(task_name, (err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Database error', details: err });
        }

        res.status(201).json({ message: 'Task added successfully', data: result });
        console.log("Task added successfully", result);
    })
}


// get all tasks controller
export const getAllTasksController = (req, res, next) => {
    console.log("Get all tasks controller");
    
    TaskModel.getAllTasks((err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Database error', details: err });
        }

        if (result.length === 0) {
            console.log("No tasks found");
            return res.status(404).json({ error: 'No tasks added yet' });
        }

        console.log("Tasks fetched successfully:", result);
        res.status(200).json({ data: result });
        
    })
    
}

// get task by id controller
export const getTaskByIdController = (req, res, next) => {
    const taskId = req.params.id;

    TaskModel.getTaskById(taskId, (err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Database error', details: err });
        }

        if(result.length === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ data: result[0] });
        console.log("Task fetched successfully", result[0]);
        
        })

    }

// update task by id controller
export const updateTaskByIdController = (req, res, next) => {
    const taskId = req.params.id;
    const {task_name, is_completed} = req.body;

    TaskModel.updateTaskById(taskId, task_name, is_completed, (err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Database error', details: err });
        }

        if(result.affectedRows === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json({ message: 'Task updated successfully', data: result[0] });
        console.log("Task updated successfully", result);
        
    })

}

// delete task by id controller
export const deleteTaskByIdController = (req, res, next) => {
    const taskId = req.params.id;

    TaskModel.deleteTaskById(taskId, (err, result) => {
        if(err){
            return res.status(500).json({ error: 'Database error', details: err });
        }

        if(result.affectedRows === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully', data: result[0] });
        console.log("Task deleted successfully", result);
    })

}

