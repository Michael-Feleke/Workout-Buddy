import User from "../models/user/model.js";

const singUpUser = async (req, res, next) => {
  const { email, password } = req.body;
  const newUser = { email, password };

  const createdUser = await User.signUpUser(newUser);

  return res.status(201).send(createdUser);
};

const logInUser = async (req, res, next) => {};

const logOutUser = async (req, res, next) => {};

export { singUpUser, logInUser, logOutUser };
