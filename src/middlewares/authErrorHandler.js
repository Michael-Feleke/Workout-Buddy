import AppError from "../utils/appError.js";

export const authErrorHandler = (err, req, res, next) => {
  if (err.code === 11000) {
    const errors = [
      { field: "email", message: "The email is already registered" },
    ];
    return next(new AppError("Validation failed", 400, errors));
  }
  next(err);
};
