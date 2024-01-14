const { query } = require("../database/db");
const moment = require("moment");

const getServices = async () => {
  let sql = `SELECT * FROM Services`;
  const services = await query(sql);
  return services;
};

const getService = (serviceId) => {
  let sql = `SELECT * FROM Services WHERE ServiceID = ?`;
  const service = query(sql, [serviceId]);
  return service;
};

const insertService = async (service) => {
  const { ServiceName, Description, Price, ImageURL, Category, DateAdded } =
    service;
  let sql = `INSERT INTO Services 
    (ServiceName, Description, Price, ImageURL, Category, DateAdded)
    VALUES
    (?, ?, ?, ?, ?, ?);
    `;
  const result = await query(sql, [
    ServiceName,
    Description,
    Price,
    ImageURL,
    Category,
    DateAdded,
  ]);
  return result.insertId; // Returning the inserted service's ID
};

const updateService = async (serviceId, updatedService) => {
  const { ServiceName, Description, Price, ImageURL, Category, DateAdded } =
    updatedService;
  let sql = `UPDATE Services 
    SET 
      ServiceName = ?,
      Description = ?,
      Price = ?,
      ImageURL = ?,
      Category = ?,
      DateAdded = ?
    WHERE ServiceID = ?;
    `;
  const result = await query(sql, [
    ServiceName,
    Description,
    Price,
    ImageURL,
    Category,
    DateAdded,
    serviceId,
  ]);
  return result.affectedRows > 0; // Returning true if the update was successful
};

const deleteService = async (serviceId) => {
  const sql = "DELETE FROM Services WHERE ServiceID = ?";
  await query(sql, [serviceId]);
};

module.exports = {
  getServices,
  getService,
  insertService,
  updateService,
  deleteService,
};
