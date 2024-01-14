const express = require("express");
const {
  getReviewsController,
  getReviewController,
  getReviewsByUserController,
  getReviewsByServiceController,
  insertReviewController,
  updateReviewController,
  deleteReviewController,
} = require("../controllers/Reviews.controller");

const router = express.Router();

router.get("/reviews", getReviewsController);
router.post("/review", insertReviewController);
router.get("/review/:id", getReviewController);
router.delete("/review/:id", deleteReviewController);
module.exports = router;
