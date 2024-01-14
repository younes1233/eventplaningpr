const express = require("express");
const {
  getAdminsController,
  getAdminController,
  getAdminByUsernameController,
  insertAdminController,
  deleteAdminController,
  Adminlogin,
} = require("../controllers/Admins.controller");

const router = express.Router();

router.get("/admins", getAdminController);
router.post("/admin", Adminlogin);
router.get("/admin", getAdminByUsernameController);
router.delete("/admin/:id", deleteAdminController);

module.exports = router;
