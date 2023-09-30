import { _TWinstonLogger } from "types/types";
import {createLogger, transports, format} from "winston";

const logFormat = format.combine(
    format.timestamp(),
    format.printf(({timestamp, level, message}) => {
        return `[${level}]:: ${message} : ${timestamp}`;
    })
)

export const infoLogger: _TWinstonLogger = createLogger({
    level: 'info',
    format: logFormat,
    transports: [
        new transports.Console(),
        new transports.File({filename: '../server/src/logs/info.log'})
    ]
});

export const warnLogger: _TWinstonLogger = createLogger({
    level: 'warn',
    format: logFormat,
    transports: [
        new transports.File({filename: '../server/src/logs/warn.log'})
    ]
});

export const errorLogger: _TWinstonLogger = createLogger({
    level: 'error',
    format: logFormat,
    transports: [
        new transports.File({filename: '../server/src/logs/error.log'})
    ]
})



