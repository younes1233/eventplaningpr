const { validationResult } = require("express-validator");
const {
  getAboutUs,
  getAbout,
  insertAbout,
  updateAbout,
  deleteAbout,
} = require("../services/Aboutus.services"); // Assuming the file name is about.services.js

const getAboutUsController = async (req, res) => {
  try {
    res.status(200).json({ aboutUs: await getAboutUs() });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const getAboutController = async (req, res) => {
  const aboutId = req.params.id;

  try {
    const about = await getAbout(aboutId);
    if (!about) {
      return res.status(404).json({ message: "About not found" });
    }
    res.status(200).json({ about });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const insertAboutController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { Title, Description, ImageURL, ContactInformation, MissionVision } =
    req.body;

  try {
    await insertAbout({
      Title,
      Description,
      ImageURL,
      ContactInformation,
      MissionVision,
    });
    res.status(201).json({ message: "About entry created successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const updateAboutController = async (req, res) => {
  const aboutId = req.params.id;
  const updatedAbout = req.body;

  try {
    const isUpdated = await updateAbout(aboutId, updatedAbout);
    if (!isUpdated) {
      return res.status(404).json({ message: "About not found" });
    }
    res.status(200).json({ message: "About entry updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const deleteAboutController = async (req, res) => {
  const aboutId = req.params.id;

  try {
    await deleteAbout(aboutId);
    res.status(200).json({ message: "About entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = {
  getAboutUsController,
  getAboutController,
  insertAboutController,
  updateAboutController,
  deleteAboutController,
};
