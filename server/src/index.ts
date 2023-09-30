import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/appRoutes";


const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));
app.use("/app", router);

mongoose.connect(process.env.mongo)
.then(() => console.log("DB Connection Established."))
.catch((err) => console.log("DB Error", err));

const port: string | number = process.env.port || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));