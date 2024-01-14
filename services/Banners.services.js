const { query } = require("../database/db");
const moment = require("moment");

const getBanners = async () => {
  let sql = `SELECT * FROM Banners`;
  const banners = await query(sql);
  return banners;
};

const getBanner = (bannerId) => {
  let sql = `SELECT * FROM Banners WHERE BannerID = ?`;
  const banner = query(sql, [bannerId]);
  return banner;
};

const insertBanner = async (banner) => {
  const { ImageURL, Title, Description, Link, DateAdded, Status } = banner;
  let sql = `INSERT INTO Banners 
    (ImageURL, Title, Description, Link, DateAdded, Status)
    VALUES
    (?, ?, ?, ?, ?, ?);
    `;
  const result = await query(sql, [
    ImageURL,
    Title,
    Description,
    Link,
    DateAdded,
    Status,
  ]);
  return result.insertId; // Returning the inserted banner's ID
};

const updateBanner = async (bannerId, updatedBanner) => {
  const { ImageURL, Title, Description, Link, DateAdded, Status } =
    updatedBanner;
  let sql = `UPDATE Banners 
    SET 
      ImageURL = ?,
      Title = ?,
      Description = ?,
      Link = ?,
      DateAdded = ?,
      Status = ?
    WHERE BannerID = ?;
    `;
  const result = await query(sql, [
    ImageURL,
    Title,
    Description,
    Link,
    DateAdded,
    Status,
    bannerId,
  ]);
  return result.affectedRows > 0; // Returning true if the update was successful
};

const deleteBanner = async (bannerId) => {
  const sql = "DELETE FROM Banners WHERE BannerID = ?";
  await query(sql, [bannerId]);
};

module.exports = {
  getBanners,
  getBanner,
  insertBanner,
  updateBanner,
  deleteBanner,
};
