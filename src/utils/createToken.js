import jwt from "jsonwebtoken";
import { JWT_SECRET, MAX_TOKEN_AGE } from "./constants.js";

export const createToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: MAX_TOKEN_AGE,
  });
};
