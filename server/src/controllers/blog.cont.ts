import { Request, Response } from "express";
import { _TUserId } from "types/types";

export const addBlog = async(req: Request, res: Response) => {
    try {
        const {userId, title, description}: _TUserId = req.body;
        
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}