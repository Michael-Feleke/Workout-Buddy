import User from "../models/user/index.js";
import { ENVIRONMENT, MAX_COOKIE_AGE } from "../utils/constants.js";

const singUpUser = async (req, res, next) => {
  const { email, password } = req.body;
  const newUser = { email, password };

  const createdUser = await User.signUpUser(newUser);
  const token = createdUser.generateAuthToken();

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: ENVIRONMENT === "production",
    sameSite: "strict",
    maxAge: MAX_COOKIE_AGE,
  });

  return res
    .status(201)
    .send({ _id: createdUser._id, email: createdUser.email });
};

const logInUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = { email, password };

  const loggedUser = await User.logInUser(user);
  const token = loggedUser.generateAuthToken();

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: ENVIRONMENT === "production",
    sameSite: "strict",
    maxAge: MAX_COOKIE_AGE,
  });

  return res.status(200).send({ _id: loggedUser._id, email: loggedUser.email });
};

const logOutUser = async (req, res, next) => {
  res.clearCookie("jwt");
  res.status(200).send({
    message: "Logged out successfully",
  });
};

export { singUpUser, logInUser, logOutUser };
