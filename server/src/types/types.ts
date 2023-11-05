import { Logger } from "winston";
import {Document} from "mongoose";

export type _TRegister = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type _TLogin = {
  field: string;
  password: string;
};

export type _TExistUser = Document & {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: string;
};

export type _TToken = {
  token: string;
};

export type _TWinstonLogger = Logger;

export type _TUserId = {
  userId: string;
  title: string;
  shortDescription: string;
  description: string;
};
