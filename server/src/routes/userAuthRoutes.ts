import { login, register } from "../controllers/user.cont";
import express, {Router} from "express";
import { checkLogin, checkRegister } from "../middlewares/auth";

const userRouter: Router = express.Router();


userRouter.post("/register", checkRegister, register);
userRouter.post("/login", checkLogin, login);

export default userRouter;