import express from "express";
import dotenv from "dotenv";
import Connection from "./Connection.js";
import todoRouter from "./Routes/todoRoutes.js";

dotenv.config();

const APP = express();
const PORT = process.env.PORT || 3000;

APP.use(express.json());

// ROUTES
APP.use("/todoapp", todoRouter);

APP.listen(PORT, () => {
    console.log(`The server is listening http://localhost:${PORT}... 🎥`, PORT)
    console.log("JWT TOKEN ENV" + process.env.JWT_SECRET);
    
})