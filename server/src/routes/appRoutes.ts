import express, { Router } from "express";
import userRouter from "./userAuthRoutes";

const router: Router = express.Router();

router.use("/auth", userRouter);


export default router;