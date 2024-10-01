import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/constants.js";
import User from "../models/user/index.js";
import logger from "../config/logger.js";
import AppError from "../utils/appError.js";

export const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return next(new AppError("Unauthorized: No token provided", 401));
  }

  jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      logger.error(err.message);
      return next(new AppError("Unauthorized: Invalid token", 401));
    }

    try {
      const foundUser = await User.findUserById(decodedToken.id);

      if (!foundUser) {
        return next(new AppError("Unauthorized: User not found", 401));
      }

      req.foundUser = foundUser;
      next();
    } catch (error) {
      logger.error(`Error retrieving user: ${error.message}`);
      return next(new AppError("Internal server error", 500));
    }
  });
};
