import {createLogger, transports, format} from "winston";
import { Logger } from "winston";

const logFormat = format.combine(
    format.timestamp(),
    format.printf(({timestamp, level, message}) => {
        return `[${level}]:: ${message} : ${timestamp}`;
    })
)

