import { NextFunction, Request, Response } from "express";
import User from "../models/users";
import { _TBlogId, _TExistBlog, _TExistUser, _TUserId } from "types/types";
import Blog from "../models/blogs";

export const checkAddBlog = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {userId, title, shortDescription, description}: _TUserId = req.body;
        if(!userId) return res.status(404).json({status: 404, success: false, message: "You are not logged in."});
        if(!title) return res.status(404).json({status: 404, success: false, message: "Title is required."});
        if(!shortDescription) return res.status(404).json({status: 404, success: false, message: "Short description is required."});
        if(!description) return res.status(404).json({status: 404, success: false, message: "Description is required."});

        const findExistingUser: _TExistUser = await User.findById(userId).exec();
        if(!findExistingUser) return res.status(404).json({status: 404, success: false, message: "User not found."});

        if(findExistingUser.role !== "Content Creator"){
            return res.status(400).json({status: 400, success: false, message: "You are not designated to add a post."});
        }
        next();
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const checkGetAllBlogs = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {userId}: _TUserId = req.body;
        if(!userId) return res.status(404).json({status: 404, success: false, message: "You are not logged in."});

        const findExistingUser: _TExistUser = await User.findById(userId).exec();
        if(!findExistingUser) return res.status(404).json({status: 404, success: false, message: "User not found."});

        if(findExistingUser.role){
            next();
        }
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const checkGetSingleBlog = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {userId, blogId}: _TBlogId = req.body;
        if(!userId) return res.status(404).json({status: 404, success: false, message: "You are not logged in."});
        if(!blogId) return res.status(404).json({status: 404, success: false, message: "Blog not found."});

        const findExistingUser: _TExistUser = await User.findById(userId).exec();
        if(!findExistingUser) return res.status(404).json({status: 404, success: false, message: "User not found."});

        const findExistingBlog: _TExistBlog = await Blog.findById(blogId).exec();
        if(!findExistingBlog) return res.status(404).json({status: 404, success: false, message: "Blog not found."});

        if(findExistingBlog && findExistingUser){
            next();
        }
        
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const checkGetUserBlogs = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {userId}: _TUserId = req.body;
        if(!userId) return res.status(404).json({status: 404, success: false, message: "You are not logged in."});

        const findExistingUser: _TExistUser = await User.findById(userId).exec();
        if(!findExistingUser) return res.status(404).json({status: 404, success: false, message: "User not found."});

        if(findExistingUser.role === "Content Creator"){
            next();
        }else{
            return res.status(400).json({status: 400, success: false, message: "Contact an administrator."});
        }
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}