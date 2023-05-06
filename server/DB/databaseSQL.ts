import mysql from "mysql";
import dotenv from 'dotenv';
dotenv.config()

const SQL_PASSWORD = process.env.JWT_SECRET
 
// export const connection = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "idigital-admin",
//     password: "Safe123456!",
//     database: "idigital",
//     port: 3306
// });
export const connection = mysql.createConnection({
    host: "sql7.freemysqlhosting.net",
    user: "sql7616400",
    password: "IQY4CeQnYn",
    database: "sql7616400",
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