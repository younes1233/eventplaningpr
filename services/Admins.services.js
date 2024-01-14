const { query } = require("../database/db");
const moment = require("moment");

const getAdmins = async () => {
  let sql = `SELECT * FROM Admins`;
  const admins = await query(sql);
  return admins;
};

const getAdmin = (adminId) => {
  let sql = `SELECT * FROM Admins WHERE AdminID = ?`;
  const admin = query(sql, [adminId]);
  return admin;
};

const getAdminByUsername = (username) => {
  let sql = `SELECT * FROM Admins WHERE Username = ?`;
  const admin = query(sql, [username]);
  return admin;
};

const deleteAdmin = async (adminId) => {
  const sql = "DELETE FROM Admins WHERE AdminID = ?";
  await query(sql, [adminId]);
};

const insertAdmin = async (admin) => {
  const { Username, Password, Email, Permissions } = admin;
  let sql = `INSERT INTO Admins 
    (Username, Password, Email, Permissions, CreatedAt)
    VALUES
    (?, ?, ?, ?, ?);
    `;
  const result = await query(sql, [
    Username,
    Password,
    Email,
    Permissions,
    moment().format("YYYY-MM-DD HH:mm:ss"), // Assuming your database uses a datetime format for CreatedAt
  ]);
  return result.insertId; // Returning the inserted admin's ID
};

const getAdminByCredentials = async (username, password) => {
  try {
    const user = await query(
      "SELECT * FROM Admins WHERE Username = ? AND Password = ?",
      [username, password]
    );

    return user.length > 0 ? user[0] : null; // Returning the first user found or null
  } catch (error) {
    // Handle the database error appropriately
    console.error("Error in getUserByCredentials:", error);
    throw new Error("Failed to retrieve user by credentials");
  }
};

module.exports = {
  getAdmins,
  getAdmin,
  getAdminByUsername,
  insertAdmin,
  deleteAdmin,
  getAdminByCredentials,
};
