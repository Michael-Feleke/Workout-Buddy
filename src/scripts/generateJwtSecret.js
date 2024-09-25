import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const secretKey = crypto.randomBytes(32).toString("hex");

const envFilePath = path.join(__dirname, "../../.env");

const keyLine = `\nJWT_SECRET=${secretKey}\n`;

if (fs.existsSync(envFilePath)) {
  fs.appendFileSync(envFilePath, keyLine, "utf8");
} else {
  fs.writeFileSync(envFilePath, keyLine);
}
