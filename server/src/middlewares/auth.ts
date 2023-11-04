import { NextFunction, Request, Response } from "express";
import User from "../models/users";
import { emailValidator } from "../utils/emailValidator";
import { validator } from "../utils/passwordValidator";
import bcrypt from "bcrypt";
import { _TRegister, _TLogin, _TExistUser, _TUserId } from "types/types";
import { errorLogger, infoLogger } from "../helpers/logger";

export const checkRegister = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {username, email, password, confirmPassword}: _TRegister = req.body;
        if(!username || !email || !password || !confirmPassword) return res.status(404).json({status: 404, success: false, message: "All fields are required."});
        if(password !== confirmPassword) return res.status(400).json({status: 404, success: false, message: "Passwords do not match."});
        try{
            validator(password);
            emailValidator(email);
            infoLogger.info(`Validators triggered. username: '${username}', email: '${email}', password: '${password}'`);
        }catch(err){
            errorLogger.error(`Validators error triggered. error: '${err.message}'`);
            return res.status(404).json({status: 404, success: false, message: err.message});
        }
        next();
    } catch (error) {
        errorLogger.info(`Server error triggered. error: '${error.message}'`)
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

export const checkChangeRole = async(req: Request,res: Response, next: NextFunction) => {
    try {
        const {userId}: _TUserId = req.body;
        if(!userId) return res.status(404).json({status: 404, success: false, message: "You are not logged in."});

        const findExistingUser: _TExistUser = await User.findById(userId).exec();
        if(!findExistingUser) return res.status(404).json({status: 404, success: false, message: "User not found."});

        if(findExistingUser.role !== "Reader"){
            return res.status(400).json({status: 400, success: false, message: "You are already a creator."});
        }
        next();
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}