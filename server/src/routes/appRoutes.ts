import express, { Router } from "express";
import userRouter from "./userAuthRoutes";
import blogRouter from "./blogRoutes";

const router: Router = express.Router();

router.use("/auth", userRouter);
router.use("/blog", blogRouter);


export default router;