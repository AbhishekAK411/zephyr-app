import { Request, Response } from "express";
import User from "../models/users";
import bcrypt from "bcrypt";
import { _TRegister, _TLogin, _TExistUser, _TToken, _TUserId } from "types/types";
import jwt, { JwtPayload } from "jsonwebtoken";
import { errorLogger, infoLogger } from "../helpers/logger";


export const register = async(req: Request, res: Response) => {
    try {
        const {username, email, password}: _TRegister = req.body;

        const oldUser: _TExistUser | null = await User.findOne({email}).exec();
        if(oldUser) return res.status(403).json({status: 403, success: false, message: "User is already registered."});
        try {
            const hashPass:string = await bcrypt.hash(password, 10);
          const newUser = new User({
            username,
            email,
            password: hashPass
          });
          infoLogger.info(`User registration triggered. profile: '${newUser}'`);
          await newUser.save();
          return res.status(201).json({status: 201, success: true, message: "User registered successfully."});
        } catch (error) {
            errorLogger.error(`User registration error triggered. error: '${error}'`);
            return res.status(400).json({status: 400, success: false, message: error.username.message});
        }
    } catch (error) {
        errorLogger.error(`Server error triggered. error: '${error}'`);
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const login = async(req: Request, res: Response) => {
    try {
        const {field}: _TLogin = req.body;
        const existUser: _TExistUser | null = await User.findOne({$or: [{username: field}, {email: field}]}).exec();
        const userId: object = {id: existUser._id};
        const token: string = jwt.sign(userId, process.env.JWT_SECRET);
        return res.status(200).json({status: 200, success: true, message: "Logged in successfully.", token: token, user: existUser});
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const getCurrentUser = async(req: Request,res: Response) => {
    try {
        const {token}: _TToken = req.body;
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        const userId = decodeToken.id;
        const user = await User.findById(userId).select("-password").exec();
        if(user){
            return res.status(200).json({status: 200, success: true, data: user});
        }
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const changeRole = async(req: Request,res: Response) => {
    try {
        const {userId}: _TUserId = req.body;

        const findExistingUser: _TExistUser = await User.findById(userId).exec();
        if(!findExistingUser) return res.status(404).json({status: 404, success: false, message: "User not found."});

        if(findExistingUser.role === "Reader"){
            findExistingUser.role = "Content Creator";
            await findExistingUser.save();
            return res.status(200).json({status: 200, success: true, message: "Role changed successfully."});
        }else{
            return res.status(400).json({status: 400, success: false, message: "You are already a Content Creator."});
        }
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}