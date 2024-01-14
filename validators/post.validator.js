const { check } = require("express-validator");

const insertPostValidation = [
  check("user_id").notEmpty().withMessage("User ID is required"),
  check("content").notEmpty().withMessage("Content is required"),
  check("created_at").notEmpty().withMessage("Created At is required"),
  // Additional validators as needed for each field
];

module.exports = {
  insertPostValidation,
};
