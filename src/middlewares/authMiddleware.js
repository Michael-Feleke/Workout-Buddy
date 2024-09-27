import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/constants.js";
import User from "../models/user/index.js";

export const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.status(401).send({
          status: "error",
          message: "Unauthorized: No token provided",
          statusCode: 401,
        });
      } else {
        let foundUser = await User.findUserById(decodedToken.id);
        req.foundUser = foundUser;
        next();
      }
    });
  } else {
    res.status(401).send({
      status: "error",
      message: "Unauthorized: No token provided",
      statusCode: 401,
    });
  }
};
