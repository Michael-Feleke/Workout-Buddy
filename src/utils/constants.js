import dotenv from "dotenv";
import config from "config";

dotenv.config();

//env constants
export const PORT = process.env.PORT;
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;

//config values
export const ENVIRONMENT = config.get("environment");
export const MORGAN_FORMAT = config.get("logging.morgan");
export const LOG_LEVEL = config.get("logging.level");

//const numbers
export const SALT_ROUNDS = 12;
export const MAX_TOKEN_AGE = 3 * 24 * 60 * 60;
export const MAX_COOKIE_AGE = MAX_TOKEN_AGE * 1000;
