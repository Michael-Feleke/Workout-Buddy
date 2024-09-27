import bcrypt from "bcrypt";
import AppError from "../../utils/appError.js";

export async function signUpUser(newUser) {
  return this.create(newUser);
}

export async function logInUser({ email, password }) {
  const existedUser = await this.findOne({ email });

  if (existedUser) {
    const auth = await bcrypt.compare(password, existedUser.password);
    if (auth) return existedUser;
    throw new AppError("Incorrect password", 400);
  }
  throw new AppError("Incorrect email", 400);
}

export async function findUserById(id) {
  return await this.findById(id);
}
