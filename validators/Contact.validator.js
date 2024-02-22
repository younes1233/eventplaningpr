const { check } = require("express-validator");

const insertContactValidation = [
  // check("username").notEmpty().withMessage("User Name is required"),
  // check("email").isEmail().withMessage("Invalid Email Format"),
  // check("message").notEmpty().withMessage("Invalid message Format"),
  // check("phone").isMobilePhone().withMessage("invalid mobile phone"),
];

const updateUserValidation = [
  check("userId").notEmpty().withMessage("User ID cannot be empty"),
  check("userName").notEmpty().withMessage("User Name is required"),
  check("userEmail").isEmail().withMessage("Invalid Email Format"),
  check("userPassword").notEmpty().withMessage("User Password is required"),
  check("userPassword").matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    "i"
  ),
];

module.exports = {
  insertContactValidation,
  updateUserValidation,
};
