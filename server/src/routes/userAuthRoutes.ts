import { changeRole, getCurrentUser, login, register } from "../controllers/user.cont";
import express, {Router} from "express";
import { checkChangeRole, checkLogin, checkRegister } from "../middlewares/auth";

const userRouter: Router = express.Router();


userRouter.post("/register", checkRegister, register);
userRouter.post("/login", checkLogin, login);
userRouter.post("/getCurrentUser", getCurrentUser);
userRouter.post("/change", checkChangeRole, changeRole);

export default userRouter;