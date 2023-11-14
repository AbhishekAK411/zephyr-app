import { Request, Response } from "express";
import Blog from "../models/blogs";
import User from "../models/users";
import { _TExistBlog, _TExistUser, _TUserId } from "types/types";

export const addBlog = async(req: Request, res: Response) => {
    try {
        const {userId, title, shortDescription, description}: _TUserId = req.body;
        
        const findExistingUser: _TExistUser = await User.findById(userId).exec();
        if(!findExistingUser) return res.status(404).json({status: 404, success: false, message: "User not found."});

        if(findExistingUser.role !== "Content Creator"){
            return res.status(400).json({status: 400, success: false, mesage: "You are not designated to add blogs."});
        }
        const newBlog = new Blog({
            title,
            shortDescription,
            description,
            user: userId
        });

        await newBlog.save();
        return res.status(201).json({status: 201, success: true, message: "Blog created."});
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const getAllBlogs = async(req: Request, res: Response) => {
    try {
        const {userId}: _TUserId = req.body;
        if(!userId) return res.status(404).json({status: 404, success: false, message: "You are not logged in."});

        const findExistingUser: _TExistUser = await User.findById(userId).exec();
        if(!findExistingUser) return res.status(404).json({status: 404, success: false, message: "User not found."});
        
        if(findExistingUser.role){
            const allBlogs = await Blog.find({}).select("-user").exec();
            return res.status(200).json({status: 200, success: true, allBlogs: allBlogs});
        }
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const getSingleBlog = async(req: Request, res: Response) => {
    try {
        const {blogId} = req.body;

        const findExistingBlog: _TExistBlog = await Blog.findById(blogId).exec();
        if(!findExistingBlog) return res.status(404).json({status: 404, success: false, message: "Blog not found."});

        const findExistingUser: _TExistUser = await User.findById(findExistingBlog.user).exec();
        if(!findExistingUser) return res.status(404).json({status: 404, success: false, message: "User not found."});

        if(findExistingBlog){
            return res.status(200).json({status: 200, success: true, singleBlog: findExistingBlog, author: findExistingUser.username});
        }
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const getUserBlogs = async(req: Request, res: Response) => {
    try {
        const {userId}: _TUserId = req.body;

        const findExistingUser: _TExistUser =await User.findById(userId).exec();
        if(!findExistingUser) return res.status(404).json({status: 404, success: false, message: "User not found."});

        const allBlogs = await Blog.find({user: userId}).exec();
        if(allBlogs.length === 0){
            return res.status(200).json({status: 200, success: true, userBlogs: []});
        }else{
            return res.status(200).json({status: 200, success: true, userBlogs: allBlogs});
        }
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const deleteBlog = async(req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if(!id) return res.status(404).json({status: 404, success: false, message: "Contact an administrator."});

        const deleteBlog = await Blog.findByIdAndDelete(id).exec();

        if(deleteBlog){
            return res.status(200).json({status: 200, success: true, message: "Blog deleted successfully."});
        }
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const updateBlog = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {title, shortDescription, description} = req.body;

        const findExistingBlog: _TExistBlog = await Blog.findById(id).exec();
        if(!findExistingBlog) return res.status(404).json({status: 404, success: false, message: "Blog not found."});

        const updateBlog = await Blog.findByIdAndUpdate(id, {title, shortDescription, description}).exec();
        if(updateBlog){
            return res.status(200).json({status: 200, success: true, message: "Blog updated successfully."});
        }else{
            return res.status(400).json({status: 400, success: false, message: "Error updating blog."});
        }
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}