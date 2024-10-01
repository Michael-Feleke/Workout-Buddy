import fs from "fs";
import path from "path";

export const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};
