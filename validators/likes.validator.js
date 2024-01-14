const { check } = require("express-validator");
const moment = require("moment");

const insertLikeValidation = [
  check("user_id").notEmpty().withMessage("User ID is required"),
  check("post_id").notEmpty().withMessage("Post ID is required"),
  check("created_at")
    .notEmpty()
    .withMessage("Created At is required")
    .isISO8601()
    .withMessage("Created At should be in ISO8601 format"), // Assuming date format
];

module.exports = {
  insertLikeValidation,
};
