import logger from "../config/logger.js";

export const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const defaultErrorMessage = "Internal Server Error";

  logger.error("Error 💥", err);

  res.status(statusCode).json({
    status: "error",
    message: err.message || defaultErrorMessage,
    statusCode,
  });
};
