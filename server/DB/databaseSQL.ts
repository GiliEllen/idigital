import mysql from "mysql";
import dotenv from 'dotenv';
dotenv.config()

const SQL_PASSWORD = process.env.JWT_SECRET
 
export const connection = mysql.createConnection({
    host: "localhost",
    user: "idigital-admin",
    password: "Safe123456!",
    database: "idigital",
    port: 3306
});

connection.connect((error) => {
    try {
        if(error) throw error;
        console.log("Connected to MySQL");
    } catch (error) {
        console.error(error);
    }
});