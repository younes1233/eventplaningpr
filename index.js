const express = require("express");
const moment = require("moment");
const config = require("./database/config");
const { query } = require("./database/db");
require("dotenv").config();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const aboutus = require("./routes/Aboutus.routes");
const admins = require("./routes/Admins.routes");
const banners = require("./routes/Banners.route");
const Information = require("./routes/Information.routes");
const reviews = require("./routes/Reviews.routes");
const services = require("./routes/Services.routes");
const contacts = require("./routes/Contact.routes");

app.get("/", async (req, res) => {
  const users = await query("select * from users");
  const data = {
    message: "test message",
    content: "this is the content",
    users: users,
  };
  res.render("index", data);
});

app.get("/home", async (req, res) => {
  const services = await query("select * from Services");
  const galleries = await query("select * from Gallery");
  console.log(galleries);
  res.render("homeEvents", { services: services, galleries: galleries });
});

app.get("/login", async (req, res) => {
  res.render("login", { errorMessage: " " });
});

app.get("/about", async (req, res) => {
  res.render("about");
});

app.get("/admin", async (req, res) => {
  const contacts = await query("SELECT * FROM Contact");
  console.log(contacts);
  res.render("Admin", { contacts: contacts });
});

app.get("/gallery", async (req, res) => {
  const galleries = await query("SELECT * FROM Gallery LIMIT 6");
  console.log(galleries);
  res.render("Gallery", { galleries: galleries });
});

app.get("/services", async (req, res) => {
  res.render("services");
});

app.get("/event", async (req, res) => {
  res.render("homeEvents");
});

app.get("/contact", async (req, res) => {
  const errorMessage = " ";
  res.render("contact", { errorMessage });
});

app.get("/*", async (req, res) => {
  res.render("Error");
});
app.use("/api", admins);
app.use("/api/aboutus", aboutus);
app.use("/api/banners", banners);
app.use("/api/info", Information);
app.use("/api/reviews", reviews);
app.use("/api/services", services);
app.use("/api/contacts", contacts);

app.listen(port, () => {
  console.log(`my app is listening ${port}`);
});
