import { Router } from "express";
import { protect } from "../index";
import { checkPassword } from "./user.middlewares";
import {
  register,
  login,
  logout,
  getUser,
  updateUser,
  deleteUser,
} from "./user.controllers";
import { changePassword, checkTokenCookie } from "./user.services";

const router: Router = Router();
router.post("/register", register);
router.post("/login", login);
router.post("/logout", protect, logout);
router.post("/check-token-cookie", protect, checkTokenCookie);
router
  .use(protect)
  .route("/")
  .get(getUser)
  .patch(updateUser)
  .delete(checkPassword, deleteUser);
router.patch("/change-password", protect, checkPassword, changePassword);

export default router;
