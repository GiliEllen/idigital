import express from "express";
import { getUserByCookie, getUserById, loginUser, registerUser } from "./usersCtrl";

const router = express.Router();

router
    .post("/register-user", registerUser)
    .post("/login-user", loginUser)
    .get("/get-user-by-cookie", getUserByCookie)
    .post("/get-user-by-id/:userId", getUserById)
    

export default router;