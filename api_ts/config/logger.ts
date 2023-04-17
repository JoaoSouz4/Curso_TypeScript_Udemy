import winston from 'winston';
import config  from 'config';

const levels = {
    erro: 0,
    warn: 1,
    info: 2,
    http: 3, 
    debug: 4
}

const level = () => {
    const env = config.get<string>("env") || "develipment";
    const isDevelopment = env ? "development" : false

    return isDevelopment ? "debug" : "warn"
}

const colors = {
    erro: "red",
    warn: "yellow",
    info: "green",
    htpp: "margenta", 
    debug: "whtie"
}

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({format: "YYY--MM--DD HH:mm:ss:ms"}),
    winston.format.colorize({all: true}),
    winston.format.printf(
        (info) => `${info.timestamp} - ${info.level} : ${info.message}`
    )
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: "logs/error.log",
        level: "error"
    }),

    new winston.transports.File({filename: "logs/all.log"}),
];

const Logger = winston.createLogger({
    level: level(),
    levels,
    format, 
    transports
})

export default Logger;