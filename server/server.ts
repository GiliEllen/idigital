import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connection } from "./DB/databaseSQL";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

dotenv.config();

import productsRoutes from "./API/products/productsRoutes";
app.use("/products", productsRoutes);

import usersRoutes from "./API/users/usersRoutes";
app.use("/users", usersRoutes);

app.get("/test", (req, res) => {
  res.send({ok:"hello"})
})



app.listen(port, () => {
  console.info(`Server is up and running at port ${port}`);
});
