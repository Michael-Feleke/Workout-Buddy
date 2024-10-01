import express from "express";

import {
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUser } from "../validation/validateUser.js";

const router = express.Router();

router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", validateUser, updateUser);

export default router;
