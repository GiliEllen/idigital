import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connection } from "./DB/databaseSQL";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cookieParser());

dotenv.config();

import productsRoutes from "./API/products/productsRoutes";
app.use("/products", productsRoutes);

import usersRoutes from "./API/users/usersRoutes";
app.use("/users", usersRoutes);



app.listen(port, () => {
  console.info(`Server is up and running at http://localhost:${port}`);
});
