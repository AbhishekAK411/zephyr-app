import { addBlog, deleteBlog, getAllBlogs, getSingleBlog, getUserBlogs, updateBlog } from "../controllers/blog.cont";
import express,{Router} from "express";
import { checkAddBlog, checkDeleteBlog, checkGetAllBlogs, checkGetSingleBlog, checkGetUserBlogs, checkUpdateblog } from "../middlewares/blogAuth";

const blogRouter: Router = express.Router();

blogRouter.post("/create", checkAddBlog, addBlog);
blogRouter.post("/feed", checkGetAllBlogs, getAllBlogs);
blogRouter.post("/getSingle", checkGetSingleBlog, getSingleBlog);
blogRouter.post("/getUserBlogs", checkGetUserBlogs, getUserBlogs);
blogRouter.put("/update/:id", checkUpdateblog, updateBlog);
blogRouter.delete("/delete/:id", checkDeleteBlog, deleteBlog);

export default blogRouter;