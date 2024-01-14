const express = require("express");
const {
  getServicesController,
  getServiceController,
  insertServiceController,
  updateServiceController,
  deleteServiceController,
} = require("../controllers/Services.controller");

const router = express.Router();

router.get("/services", getServicesController);
router.post("/service", insertServiceController);
router.get("/service/:id", getServiceController);
router.delete("/service/:id", deleteServiceController);
module.exports = router;
