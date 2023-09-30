import { getCurrentUser, login, register } from "../controllers/user.cont";
import express, {Router} from "express";
import { checkLogin, checkRegister } from "../middlewares/auth";

const userRouter: Router = express.Router();


userRouter.post("/register", checkRegister, register);
userRouter.post("/login", checkLogin, login);
userRouter.post("/getCurrentUser", getCurrentUser);

export default userRouter;