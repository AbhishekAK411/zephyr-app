import { addBlog } from "../controllers/blog.cont";
import express,{Router} from "express";
import { checkAddBlog } from "../middlewares/blogAuth";

const blogRouter: Router = express.Router();

blogRouter.post("/create", checkAddBlog, addBlog);

export default blogRouter;