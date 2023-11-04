import { Request, Response } from "express";
import Blog from "../models/blogs";
import User from "../models/users";
import { _TExistUser, _TUserId } from "types/types";

export const addBlog = async(req: Request, res: Response) => {
    try {
        const {userId, title, description}: _TUserId = req.body;
        
        const findExistingUser: _TExistUser = await User.findById(userId).exec();
        if(!findExistingUser) return res.status(404).json({status: 404, success: false, message: "User not found."});

        if(findExistingUser.role !== "Content Creator"){
            return res.status(400).json({status: 400, success: false, mesage: "You are not designated to add blogs."});
        }
        const newBlog = new Blog({
            title,
            description,
            user: userId
        });

        await newBlog.save();
        return res.status(201).json({status: 201, success: true, message: "Blog created."});
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}