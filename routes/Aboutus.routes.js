const express = require("express");
const {
  getAboutUsController,
  getAboutController,
  insertAboutController,
  updateAboutController,
  deleteAboutController,
} = require("../controllers/Aboutus.controller");

const router = express.Router();

router.get("/aboutus", getAboutUsController);
router.post("/aboutus", insertAboutController);
router.get("/aboutus/:id", getAboutController);
router.delete("/aboutus/:id", deleteAboutController);
module.exports = router;
