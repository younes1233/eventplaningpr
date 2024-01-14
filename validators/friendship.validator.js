const { check } = require("express-validator");
const moment = require("moment");

const insertFriendshipValidation = [
  check("user_id_1").notEmpty().withMessage("User ID 1 is required"),
  check("user_id_2").notEmpty().withMessage("User ID 2 is required"),
  check("created_at")
    .notEmpty()
    .withMessage("Created At is required")
    .isISO8601()
    .withMessage("Created At should be in ISO8601 format"), // Assuming date format
  check("status").notEmpty().withMessage("Status is required"),
];

module.exports = {
  insertFriendshipValidation,
};
