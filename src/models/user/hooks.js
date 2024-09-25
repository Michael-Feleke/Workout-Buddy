import bcrypt from "bcrypt";
import { saltRounds } from "../../utils/constants.js";

const preSaveHook = async function (next) {
  const salt = await bcrypt.genSalt(saltRounds);
  this.password = await bcrypt.hash(this.password, salt);

  next();
};

export const registerHooks = (userSchema) => {
  userSchema.pre("save", preSaveHook);
};
