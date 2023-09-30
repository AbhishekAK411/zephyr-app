import { Request, Response } from "express";
import User from "../models/users";
import bcrypt from "bcrypt";
import {_TRegister, _TLogin, _TExistUser} from "types/types";
import jwt from "jsonwebtoken";


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
          await newUser.save();
          return res.status(201).json({status: 201, success: true, message: "User registered successfully."});
        } catch (error) {
            return res.status(400).json({status: 400, success: false, message: error.username.message});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const login = async(req: Request, res: Response) => {
    try {
        const {field}: _TLogin = req.body;
        const existUser: _TExistUser | null = await User.findOne({$or: [{username: field}, {password: field}]}).exec();
        const userId: object = {id: existUser._id};
        const token: string = jwt.sign(userId, process.env.JWT_SECRET);
        return res.status(200).json({status: 200, success: true, message: "Logged in successfully.", token: token, user: existUser});
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const getCurrentUser = async(req: Request,res: Response) => {
    try {
        
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}