import { Logger } from "winston";

export type _TRegister = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type _TLogin = {
    field: string,
    password: string
}

export type _TExistUser = {
    _id: string
    username: string,
    email: string,
    password: string,
    role: string,
    posts: Array<Object>
}

export type _TToken = {
    token: string
}

export type _TWinstonLogger = Logger;

export type _TUserId = {
    userId: string
}