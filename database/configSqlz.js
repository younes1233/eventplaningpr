// config .js

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "socialmedia_db",
  "younes_social",
  "younes1231",
  { host: "72.167.211.165", dialect: "mysql", port: "3306" }
);

module.exports = sequelize;
