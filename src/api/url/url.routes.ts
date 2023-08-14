import { Router } from "express";
import {
  newUrl,
  getUrls,
  getUrlById,
  updateUrlById,
  deleteUrlById,
} from "./url.controllers";
import { quickReviveAll, reviveById } from "./url.services";
import { protect } from "../index";

const router: Router = Router();
router.use(protect);
router.post("/new", newUrl);
router.get("/urls-list", getUrls);
router.route("/:id").get(getUrlById).put(updateUrlById).delete(deleteUrlById);
router.post("/revive/:url_id", reviveById);
router.post("/revive-all/on-login", quickReviveAll);

export default router;
