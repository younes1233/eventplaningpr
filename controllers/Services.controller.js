const { validationResult } = require("express-validator");
const {
  getServices,
  getService,
  insertService,
  updateService,
  deleteService,
} = require("../services/Services.services"); // Assuming the file name is services.services.js

const getServicesController = async (req, res) => {
  try {
    res.status(200).json({ services: await getServices() });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const getServiceController = async (req, res) => {
  const serviceId = req.params.id;

  try {
    const service = await getService(serviceId);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ service });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const insertServiceController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { ServiceName, Description, Price, ImageURL, Category, DateAdded } =
    req.body;

  try {
    await insertService({
      ServiceName,
      Description,
      Price,
      ImageURL,
      Category,
      DateAdded,
    });
    res.status(201).json({ message: "Service created successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const updateServiceController = async (req, res) => {
  const serviceId = req.params.id;
  const updatedService = req.body;

  try {
    const isUpdated = await updateService(serviceId, updatedService);
    if (!isUpdated) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const deleteServiceController = async (req, res) => {
  const serviceId = req.params.id;

  try {
    await deleteService(serviceId);
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = {
  getServicesController,
  getServiceController,
  insertServiceController,
  updateServiceController,
  deleteServiceController,
};
