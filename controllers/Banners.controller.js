const { validationResult } = require("express-validator");
const {
  getBanners,
  getBanner,
  insertBanner,
  updateBanner,
  deleteBanner,
} = require("../services/Banners.services"); // Assuming the file name is banners.services.js

const getBannersController = async (req, res) => {
  try {
    res.status(200).json({ banners: await getBanners() });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const getBannerController = async (req, res) => {
  const bannerId = req.params.id;

  try {
    const banner = await getBanner(bannerId);
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.status(200).json({ banner });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const insertBannerController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { ImageURL, Title, Description, Link, DateAdded, Status } = req.body;

  try {
    await insertBanner({
      ImageURL,
      Title,
      Description,
      Link,
      DateAdded,
      Status,
    });
    res.status(201).json({ message: "Banner created successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const updateBannerController = async (req, res) => {
  const bannerId = req.params.id;
  const updatedBanner = req.body;

  try {
    const isUpdated = await updateBanner(bannerId, updatedBanner);
    if (!isUpdated) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.status(200).json({ message: "Banner updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const deleteBannerController = async (req, res) => {
  const bannerId = req.params.id;

  try {
    await deleteBanner(bannerId);
    res.status(200).json({ message: "Banner deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = {
  getBannersController,
  getBannerController,
  insertBannerController,
  updateBannerController,
  deleteBannerController,
};
