import mongoose from "mongoose";
import userSchema from "./schema.js";
import * as Statics from "./statics.js";
import { registerHooks } from "./hooks.js";

userSchema.static(Statics);
registerHooks(userSchema);

const User = mongoose.model("User", userSchema);

export default User;
