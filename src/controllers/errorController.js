export const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const defaultErrorMessage = "Internal Server Error";

  console.error("Error 💥", err);

  res.status(statusCode).json({
    status: "error",
    message: err.message || defaultErrorMessage,
    statusCode,
  });
};
