import { Router } from "express";
import { userRouter, urlRouter } from "./api/index";
const router: Router = Router();

router.use("/url", urlRouter);
router.use("/user", userRouter);

export default router;
