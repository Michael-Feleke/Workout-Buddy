import jwt from "jsonwebtoken";
import { JWT_SECRET, MAX_TOKEN_AGE } from "../../utils/constants.js";

export function generateAuthToken() {
  return jwt.sign({ id: this._id }, JWT_SECRET, {
    expiresIn: MAX_TOKEN_AGE,
  });
}
