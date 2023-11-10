import { addBlog, getAllBlogs, getSingleBlog, getUserBlogs } from "../controllers/blog.cont";
import express,{Router} from "express";
import { checkAddBlog, checkGetAllBlogs, checkGetSingleBlog, checkGetUserBlogs } from "../middlewares/blogAuth";

const blogRouter: Router = express.Router();

blogRouter.post("/create", checkAddBlog, addBlog);
blogRouter.post("/feed", checkGetAllBlogs, getAllBlogs);
blogRouter.post("/getSingle", checkGetSingleBlog, getSingleBlog);
blogRouter.post("/getUserBlogs", checkGetUserBlogs, getUserBlogs);

export default blogRouter;