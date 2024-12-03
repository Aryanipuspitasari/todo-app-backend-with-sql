import mysql from "mysql2";
import express from "express";
import dotenv from "dotenv";

// LOAD ENV CONFIG
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port : process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

connection.connect((err) => {
    if(err){
        console.log("error connecting ⛔ : " + err.stack);

        return;
        
    }

    console.log(`Database connected! 😍`);
    console.log("connected as id :) " + connection.threadId);
    
})

export default connection;
