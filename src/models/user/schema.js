import mongoose from "mongoose";
import * as Statics from "./statics.js";
import isEmail from "validator/lib/isEmail.js";

const Schema = mongoose.Schema();

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please Enter a valid email"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  {
    timeStamps: true,
  }
);

userSchema.static(Statics);

export default userSchema;
