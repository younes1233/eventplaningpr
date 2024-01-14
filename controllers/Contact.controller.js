const { validationResult } = require("express-validator");
const { insertContact } = require("../services/Contact.services"); // Assuming the file name is admins.services.js
const nodemailer = require("nodemailer");
const getAdminsController = async (req, res) => {
  try {
    res.status(200).json({ admins: await getAdmins() });
  } catch (error) {
    res.status(500).json({ message: error?.message });
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

const insertContactController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, phone, email, message } = req.body;

  try {
    await insertContact({ username, phone, email, message });

    // Sending an email
    const transporter = nodemailer.createTransport({
      // Configure your email transport here (e.g., SMTP, Gmail, etc.)
      // For example, using Gmail:
      service: "Gmail",
      auth: {
        user: "younesossman12@gmail.com",
        pass: "zqwr mrvo upcx gske",
      },
    });

    const mailReciever = {
      from: "younesossman12@gmail.com",
      to: email,
      subject: "Thank you for contacting us!",
      text: `Thanks for your enquiry with GlowMelbourneEvents.    
    Please email us at glowmelbourneevents@gmail.com with your enquiry and include the below details:
    - Date of Event
    - Event Type
    - Location, Venue & Suburb
    - List the props or send images of your inspo, or theme
    
    Alternatively, you could visit our website at www.glowmelbourneevents.com.
    
    Look forward to hearing from you soon, and bringing your vision to life!
    
    Thank you.
    Kind Regards,
    glowmelbourneevents.`,
    };

    const mailOptions = {
      from: "younesossman12@gmail.com",
      to: "younesossman12@gmail.com",
      subject: "Someone is contacting",
      text:
        "Dear Salwa, a client has contacted you with the name:" +
        username +
        "Email" +
        email +
        "Phone:" +
        phone +
        ".",
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Error sending email" });
      } else {
        console.log("Email sent:", info.response);
        const errorMessage =
          "Your message is well received. You will be contacted as soon as possible!";
        res.render("contact", { errorMessage });
      }
    });

    transporter.sendMail(mailReciever, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Error sending email" });
      } else {
        console.log("Email sent:", info.response);
        const errorMessage =
          "Your message is well received. You will be contacted as soon as possible!";
        res.render("contact", { errorMessage });
      }
    });
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
  getAdminsController,
  getAdminController,
  getAdminByUsernameController,
  insertContactController,
  deleteAdminController,
};
