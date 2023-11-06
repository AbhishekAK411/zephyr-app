import { addBlog, getAllBlogs, getSingleBlog } from "../controllers/blog.cont";
import express,{Router} from "express";
import { checkAddBlog, checkGetAllBlogs, checkGetSingleBlog } from "../middlewares/blogAuth";

const blogRouter: Router = express.Router();

blogRouter.post("/create", checkAddBlog, addBlog);
blogRouter.post("/feed", checkGetAllBlogs, getAllBlogs);
blogRouter.post("/getSingle", checkGetSingleBlog, getSingleBlog);

export default blogRouter;