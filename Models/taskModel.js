import connection from "../Connection.js";

// function to add a task
export const addTask = (task_name, callback) => {
    const queryAddTask = 'INSERT INTO tasks (task_name) VALUES (?)';
    connection.query(queryAddTask, [task_name], (err, result) => {
        callback(err, result);
    });
}

// function to get all tasks
export const getAllTasks = (callback) => {
    const queryGetAllTask = 'SELECT * FROM tasks';
    connection.query(queryGetAllTask, (err, result) => {
        callback(err, result);
    })
}

// function to get task by id
export const getTaskById = (id, callback) => {
    const queryGetTaskById = 'SELECT * FROM tasks WHERE id = ?';
    connection.query(queryGetTaskById, [id], (err, result) => {
        callback(err, result);
    })
}

// function to update task by id
export const updateTaskById = (id, task_name, callback) => {
    const queryUpdateTaskById = 'UPDATE tasks SET task_name = ?, is_completed = ? WHERE id = ?';
    connection.query(queryUpdateTaskById, [task_name, id], (err, result) => {
        callback(err, result);
    })
}

// function to delete task by id
export const deleteTaskById = (id, callback) => {
    const queryDeleteTaskById = 'DELETE FROM tasks WHERE id = ?';
    connection.query(queryDeleteTaskById, [id], (err, result) => {
        callback(err, result);
    })
}
