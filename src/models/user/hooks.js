import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "../../utils/constants.js";

const preSaveHook = async function (next) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  this.password = await bcrypt.hash(this.password, salt);

  next();
};

export const registerHooks = (userSchema) => {
  userSchema.pre("save", preSaveHook);
};
