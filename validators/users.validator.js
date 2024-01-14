const { check } = require("express-validator");

const insertUserValidation = [
  check("username").notEmpty().withMessage("User Name is required"),
  check("email").isEmail().withMessage("Invalid Email Format"),
  check("password").notEmpty().withMessage("User Password is required"),
  check("password")
    .isStrongPassword()
    .withMessage("You entered a weak password"),
  check("firstname").notEmpty().withMessage("fisrtname is required"),
  check("lastname").notEmpty().withMessage("lastname is required"),
  check("date_of_birth").notEmpty().withMessage("date_of_birth is required"),
  check("bio").notEmpty().withMessage("bio is required"),
  check("profile_pic_url")
    .notEmpty()
    .withMessage("profile_pic_url is required"),
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
  insertUserValidation,
  updateUserValidation,
};
