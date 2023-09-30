import { NextFunction, Request, Response } from "express";
import User from "models/users";
import { emailValidator } from "utils/emailValidator";
import { validator } from "utils/passwordValidator";
import bcrypt from "bcrypt";
import { _TRegister, _TLogin, _TExistUser } from "types/types";

export const checkRegister = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, email, password, confirmPassword}: _TRegister = req.body;
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
        const {field, password}: _TLogin = req.body;
        if(!field) return res.status(404).json({status: 404, success: false, message: "Username or Email is required."});
        if(!password) return res.status(404).json({status: 404, success: false, message: "Password is required."});

        const existUser: _TExistUser | null = await User.findOne({$or: [{username: field}, {email: field}]}).exec();
        if(!existUser) return res.status(404).json({status: 404, success: false, message: "Invalid credentials."}); 
        const bool = await bcrypt.compare(password, existUser.password);
        if(bool){
            next();
        }else{
            return res.status(400).json({status: 400, success: false, message: "Invalid credentials."});
        }
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}