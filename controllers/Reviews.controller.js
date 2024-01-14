const { validationResult } = require("express-validator");
const {
  getReviews,
  getReview,
  getReviewsByUserId,
  getReviewsByServiceId,
  insertReview,
  updateReview,
  deleteReview,
} = require("../services/Reviews.servvices"); // Assuming the file name is reviews.services.js

const getReviewsController = async (req, res) => {
  try {
    res.status(200).json({ reviews: await getReviews() });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const getReviewController = async (req, res) => {
  const reviewId = req.params.id;

  try {
    const review = await getReview(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ review });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const getReviewsByUserController = async (req, res) => {
  const userId = req.params.id;

  try {
    const reviews = await getReviewsByUserId(userId);
    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const getReviewsByServiceController = async (req, res) => {
  const serviceId = req.params.id;

  try {
    const reviews = await getReviewsByServiceId(serviceId);
    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const insertReviewController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { UserID, ServiceID, Rating, ReviewText, DateAdded } = req.body;

  try {
    await insertReview({ UserID, ServiceID, Rating, ReviewText, DateAdded });
    res.status(201).json({ message: "Review created successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const updateReviewController = async (req, res) => {
  const reviewId = req.params.id;
  const updatedReview = req.body;

  try {
    const isUpdated = await updateReview(reviewId, updatedReview);
    if (!isUpdated) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const deleteReviewController = async (req, res) => {
  const reviewId = req.params.id;

  try {
    await deleteReview(reviewId);
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = {
  getReviewsController,
  getReviewController,
  getReviewsByUserController,
  getReviewsByServiceController,
  insertReviewController,
  updateReviewController,
  deleteReviewController,
};
