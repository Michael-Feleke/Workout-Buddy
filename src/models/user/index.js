import mongoose from "mongoose";
import userSchema from "./schema.js";
import * as Statics from "./statics.js";
import * as Methods from "./methods.js";
import { registerHooks } from "./hooks.js";

userSchema.static(Statics);
userSchema.method(Methods);

registerHooks(userSchema);

const User = mongoose.model("User", userSchema);

export default User;
