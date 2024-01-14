const express = require("express");
const {
  getGeneralInformationController,
  getGeneralInfoController,
  insertGeneralInfoController,
  updateGeneralInfoController,
  deleteGeneralInfoController,
} = require("../controllers/Information.controller");

const router = express.Router();

router.get("/", getGeneralInformationController);
router.post("/info", insertGeneralInfoController);
router.get("/:id", getGeneralInfoController);
router.delete("/:id", deleteGeneralInfoController);
module.exports = router;
