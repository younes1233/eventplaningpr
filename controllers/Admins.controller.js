const { validationResult } = require("express-validator");
const {
  getAdmins,
  getAdmin,
  getAdminByUsername,
  insertAdmin,
  deleteAdmin,
  getAdminByCredentials,
} = require("../services/Admins.services"); // Assuming the file name is admins.services.js

const Adminlogin = async (req, res) => {
  const { username, Password } = req.body;
  console.log(username + "  pass: " + Password);
  if (!username || !Password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const user = await getAdminByCredentials(username, Password);
    if (!user || user.username === 0 || user.Password !== Password) {
      return res.render("login", {
        errorMessage: "Invalid Credentials! Please try again!",
      });
    }

    // const users = await query("select * from users");
    // const contacts = await query("select * from Contact");
    // const data = {
    //   message: "test message",
    //   content: "this is the content",
    //   users: users,
    //   contacts: contacts,
    // };
    res.render("index");

    // const token = jwt.sign({ userId: user.user_id }, db.JWT_SECRET, {
    //   expiresIn: "1h",
    // });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAdminController = async (req, res) => {
  const adminId = req.params.id;

  try {
    const admin = await getAdmin(adminId);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json({ admin });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const getAdminByUsernameController = async (req, res) => {
  const username = req.params.username;

  try {
    const admin = await getAdminByUsername(username);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json({ admin });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const insertAdminController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { Username, Password, Email, Permissions } = req.body;

  try {
    await insertAdmin({ Username, Password, Email, Permissions });
    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const deleteAdminController = async (req, res) => {
  const adminId = req.params.id;
  try {
    await deleteAdmin(adminId);
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = {
  Adminlogin,
  getAdminController,
  getAdminByUsernameController,
  insertAdminController,
  deleteAdminController,
};
