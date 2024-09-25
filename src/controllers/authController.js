import User from "../models/user/index.js";
import { MAX_COOKIE_AGE } from "../utils/constants.js";
import { createToken } from "../utils/createToken.js";

const singUpUser = async (req, res, next) => {
  const { email, password } = req.body;
  const newUser = { email, password };

  const createdUser = await User.signUpUser(newUser);
  const token = createToken(createdUser._id);

  res.cookie("jwt", token, {
    httpOnly: true,
    //secure: true,
    sameSite: "strict",
    maxAge: MAX_COOKIE_AGE,
  });

  return res.status(201).send({ user: createdUser._id });
};

const logInUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = { email, password };

  const loggedUser = await User.logInUser(user);
  const token = createToken(loggedUser._id);

  res.cookie("jwt", token, {
    httpOnly: true,
    //secure: true,
    sameSite: "strict",
    maxAge: MAX_COOKIE_AGE,
  });

  return res.status(200).send({ user: loggedUser._id });
};

const logOutUser = async (req, res, next) => {};

export { singUpUser, logInUser, logOutUser };
