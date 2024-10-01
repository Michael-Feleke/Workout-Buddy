import bcrypt from "bcrypt";
import AppError from "../../utils/appError.js";

//authentication
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

// account operations
export async function findUserById(id) {
  return await this.findById(id);
}

export async function deleteUser(id) {
  return this.findByIdAndDelete(id);
}

export async function updateUser(id, user) {
  return this.findByIdAndUpdate(id, user, { new: true });
}
