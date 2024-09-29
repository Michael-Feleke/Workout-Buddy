import winston from "winston";
import { ENVIRONMENT, LOG_LEVEL } from "../utils/constants.js";

const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return ENVIRONMENT === "production"
        ? `${timestamp} [${level}]: ${message}`
        : `[${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console({
      silent: false,
    }),
  ],
});

export default logger;
