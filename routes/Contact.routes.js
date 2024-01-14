const express = require("express");
const {
  insertContactController,
} = require("../controllers/Contact.controller");

const { insertContactValidation } = require("../validators/Contact.validator");
const { route } = require("./Aboutus.routes");
const router = express.Router();

router.post("/contact", insertContactValidation, insertContactController);
module.exports = router;
