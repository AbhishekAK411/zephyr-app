import { addBlog, getAllBlogs } from "../controllers/blog.cont";
import express,{Router} from "express";
import { checkAddBlog, checkGetAllBlogs } from "../middlewares/blogAuth";

const blogRouter: Router = express.Router();

blogRouter.post("/create", checkAddBlog, addBlog);
blogRouter.post("/feed", checkGetAllBlogs, getAllBlogs);

export default blogRouter;