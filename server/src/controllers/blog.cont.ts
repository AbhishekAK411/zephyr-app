import { Request, Response } from "express";
import User from "models/users";
import { _TExistUser, _TUserId } from "types/types";

export const createBlog = async(req: Request, res: Response) => {
    try {
        const {userId}: _TUserId = req.body;

        const findExistingUser: _TExistUser = await User.findById(userId).exec();
        
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const getBlog = async(req: Request, res: Response) => {
    try {
        
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const editBlog = async(req: Request, res: Response) => {
    try {
        
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error"});
    }
}

export const deleteBlog = async(req: Request, res: Response) => {
    try {
        
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}
