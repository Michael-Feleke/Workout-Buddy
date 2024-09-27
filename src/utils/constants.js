import dotenv from "dotenv";

dotenv.config();

//env constants
export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const IS_IN_PRODUCTION = process.env.NODE_ENV === "production" || false;

export const SALT_ROUNDS = 12;
export const MAX_TOKEN_AGE = 3 * 24 * 60 * 60;
export const MAX_COOKIE_AGE = MAX_TOKEN_AGE * 1000;
