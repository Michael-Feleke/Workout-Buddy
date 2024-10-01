import User from "../models/user/index.js";
import AppError from "../utils/appError.js";
import { isValidMongoId } from "../utils/isValidMongoId.js";

const getUser = async (req, res, next) => {
  const { id } = req.params;
  if (!isValidMongoId(id)) return next(new AppError("Invalid user id", 400));

  const user = await User.findUserById(id);
  if (!user) return next(new AppError("No such user", 404));

  res.status(200).send({ _id: user._id, email: user.email });
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  if (!isValidMongoId(id)) return next(new AppError("Invalid user id", 400));

  const deletedUser = await User.deleteUser(id);
  if (!deletedUser) return next(new AppError("No such user", 404));

  res.clearCookie("jwt");
  res.status(200).send({ _id: deletedUser._id, email: deletedUser.email });
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const user = { ...req.body };

  if (!isValidMongoId(id)) return next(new AppError("Invalid user id", 400));

  const updatedUser = await User.updateUser(id, user);
  if (!updatedUser) return next(new AppError("No such user", 404));

  res.status(200).send(updatedUser);
};

export { getUser, deleteUser, updateUser };
