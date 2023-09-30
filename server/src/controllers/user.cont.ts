import { Request, Response } from "express";
import User from "models/users";
import bcrypt from "bcrypt";

type TuserData = {
    username: string,
    email: string,
    password: string
}

export const register = async(req: Request, res: Response) => {
    try {
        const {username, email, password}: TuserData = req.body;

        const oldUser: object | null = await User.findOne({email}).exec();
        if(!oldUser) return res.status(403).json({status: 403, success: false, message: "User is already registered."});
        try {
            const hashPass:string = await bcrypt.hash(password, 10);
          const newUser = new User({
            username,
            email,
            password: hashPass
          });
          await newUser.save();
          return res.status(201).json({status: 201, success: false, message: "User registered successfully."});
        } catch (error) {
            return res.status(400).json({status: 400, success: false, message: error.username.message});
        }
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}

export const login = async(req: Request, res: Response) => {
    try {
        
    } catch (error) {
        return res.status(500).json({status: 500, success: false, message: "Internal server error."});
    }
}