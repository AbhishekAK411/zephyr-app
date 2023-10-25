import { NextFunction, Request, Response } from "express";
import User from "models/users";
import { _TExistUser, _TUserId } from "types/types";

export const checkCreateBlog = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {userId}: _TUserId = req.body;
        if(!userId) return res.status(404).json({status: 404, success: false, message: "You are not logged in."});

        const findExistingUser: _TExistUser = await User.findById(userId).exec();
        if(findExistingUser.role !== 'Content Creator') return res.status(400).json({status: 400, success: false, message: "Kindly contact an admin for verification."});
        
        next();
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}