const express = require("express");
const {
  getBannersController,
  getBannerController,
  insertBannerController,
  updateBannerController,
  deleteBannerController,
} = require("../controllers/Banners.controller");

const router = express.Router();

router.get("/banners", getBannersController);
router.post("/banner", insertBannerController);
router.get("/:id", getBannerController);
router.delete("/banner/:id", deleteBannerController);
module.exports = router;
