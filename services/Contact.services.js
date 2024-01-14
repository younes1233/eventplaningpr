const { query } = require("../database/db");
const moment = require("moment");

const getContacts = async () => {
  let sql = `SELECT * FROM Contact`;
  const admins = await query(sql);
  return admins;
};

const getContact = (adminId) => {
  let sql = `SELECT * FROM Admins WHERE Contact_id = ?`;
  const Contact = query(sql, [adminId]);
  return Contact;
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

const insertContact = async (Contact) => {
  const { username, email, phone, message } = Contact;

  // Check if any required property is undefined
  if (
    username === undefined ||
    email === undefined ||
    phone === undefined ||
    message === undefined
  ) {
    throw new Error("One or more properties in Contact are undefined");
  }

  console.log(Contact);
  let sql = `
    INSERT INTO Contact 
    (Name, Email, Message, Phone)
    VALUES (?, ?, ?, ?)
  `;

  try {
    const result = await query(sql, [username, email, message, phone]);

    return result.insertId; // Returning the inserted contact's ID
  } catch (error) {
    console.error("Error inserting contact:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

module.exports = {
  getContacts,
  getContact,
  insertContact,
};
