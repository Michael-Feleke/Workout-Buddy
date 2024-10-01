import winston from "winston";
import path from "path";
import { ENVIRONMENT, LOG_LEVEL } from "../utils/constants.js";
import { ensureDirectoryExists } from "../utils/ensureDirectoryExists.js";

const errorLogPath = path.join("logs", "error.log");
const combinedLogPath = path.join("logs", "combined.log");

ensureDirectoryExists(errorLogPath);
ensureDirectoryExists(combinedLogPath);

const logFormat = winston.format.printf(({ timestamp, level, message }) => {
  return ENVIRONMENT === "production"
    ? `${timestamp} [${level}]: ${message}`
    : `[${level}]: ${message}`;
});

const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    logFormat
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), logFormat),
      silent: ENVIRONMENT === "test",
    }),
  ],
});

if (ENVIRONMENT === "production") {
  const logDirectory = path.join("logs");

  logger.add(
    new winston.transports.File({
      filename: path.join(logDirectory, "error.log"),
      level: "error",
    })
  );

  logger.add(
    new winston.transports.File({
      filename: path.join(logDirectory, "combined.log"),
    })
  );
}

export default logger;
