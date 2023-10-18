import { Request, Response } from "express";

export const createBlog = async(req: Request, res: Response) => {
    try {
        
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