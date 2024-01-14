const { check } = require("express-validator");
const moment = require("moment");

const insertCommentValidation = [
  check("user_id").notEmpty().withMessage("User ID is required"),
  check("post_id").notEmpty().withMessage("Post ID is required"),
  check("content").notEmpty().withMessage("Content is required"),
];

module.exports = {
  insertCommentValidation,
};
