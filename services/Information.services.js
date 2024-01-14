const { query } = require("../database/db");

const getGeneralInformation = async () => {
  let sql = `SELECT * FROM GeneralInformation`;
  const generalInformation = await query(sql);
  return generalInformation;
};

const getGeneralInfo = (infoId) => {
  let sql = `SELECT * FROM GeneralInformation WHERE InfoID = ?`;
  const info = query(sql, [infoId]);
  return info;
};

const insertGeneralInfo = async (info) => {
  const { Title, Content, ImageURL, ContactInformation, LocationDetails } =
    info;
  let sql = `INSERT INTO GeneralInformation 
    (Title, Content, ImageURL, ContactInformation, LocationDetails)
    VALUES
    (?, ?, ?, ?, ?);
    `;
  const result = await query(sql, [
    Title,
    Content,
    ImageURL,
    ContactInformation,
    LocationDetails,
  ]);
  return result.insertId; // Returning the inserted GeneralInformation entry's ID
};

const updateGeneralInfo = async (infoId, updatedInfo) => {
  const { Title, Content, ImageURL, ContactInformation, LocationDetails } =
    updatedInfo;
  let sql = `UPDATE GeneralInformation 
    SET 
      Title = ?,
      Content = ?,
      ImageURL = ?,
      ContactInformation = ?,
      LocationDetails = ?
    WHERE InfoID = ?;
    `;
  const result = await query(sql, [
    Title,
    Content,
    ImageURL,
    ContactInformation,
    LocationDetails,
    infoId,
  ]);
  return result.affectedRows > 0; // Returning true if the update was successful
};

const deleteGeneralInfo = async (infoId) => {
  const sql = "DELETE FROM GeneralInformation WHERE InfoID = ?";
  await query(sql, [infoId]);
};

module.exports = {
  getGeneralInformation,
  getGeneralInfo,
  insertGeneralInfo,
  updateGeneralInfo,
  deleteGeneralInfo,
};
