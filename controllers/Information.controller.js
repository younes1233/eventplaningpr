const { validationResult } = require("express-validator");
const {
  getGeneralInformation,
  getGeneralInfo,
  insertGeneralInfo,
  updateGeneralInfo,
  deleteGeneralInfo,
} = require("../services/Information.services"); // Assuming the file name is generalInformation.services.js

const getGeneralInformationController = async (req, res) => {
  try {
    res.status(200).json({ generalInformation: await getGeneralInformation() });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const getGeneralInfoController = async (req, res) => {
  const infoId = req.params.id;

  try {
    const info = await getGeneralInfo(infoId);
    if (!info) {
      return res.status(404).json({ message: "General Information not found" });
    }
    res.status(200).json({ info });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const insertGeneralInfoController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { Title, Content, ImageURL, ContactInformation, LocationDetails } =
    req.body;

  try {
    await insertGeneralInfo({
      Title,
      Content,
      ImageURL,
      ContactInformation,
      LocationDetails,
    });
    res
      .status(201)
      .json({ message: "General Information created successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const updateGeneralInfoController = async (req, res) => {
  const infoId = req.params.id;
  const updatedInfo = req.body;

  try {
    const isUpdated = await updateGeneralInfo(infoId, updatedInfo);
    if (!isUpdated) {
      return res.status(404).json({ message: "General Information not found" });
    }
    res
      .status(200)
      .json({ message: "General Information updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const deleteGeneralInfoController = async (req, res) => {
  const infoId = req.params.id;

  try {
    await deleteGeneralInfo(infoId);
    res
      .status(200)
      .json({ message: "General Information deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = {
  getGeneralInformationController,
  getGeneralInfoController,
  insertGeneralInfoController,
  updateGeneralInfoController,
  deleteGeneralInfoController,
};
