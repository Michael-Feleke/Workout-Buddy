import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      validate: {
        validator: (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$])(?=.*\d)[A-Za-z\d!@#$]{8,}$/.test(
            v
          ),
        message: (props) =>
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!,@,#,$)",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default userSchema;
