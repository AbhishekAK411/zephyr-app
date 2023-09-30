import { NextFunction, Request, Response } from "express";
import { emailValidator } from "utils/emailValidator";
import { validator } from "utils/passwordValidator";

type userType = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export const checkRegister = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, email, password, confirmPassword}: userType = req.body;
        if(!username || !email || !password || !confirmPassword) return res.status(404).json({status: 404, success: false, message: "All fields are required."});
        if(password !== confirmPassword) return res.status(400).json({status: 404, success: false, message: "Passwords do not match."});
        try{
            validator(password);
            emailValidator(email);
        }catch(err){
            return res.status(404).json({status: 404, success: false, message: err.message});
        }
        next();
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const checkLogin = async(req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}