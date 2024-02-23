require("dotenv").config();
const config = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 3306,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 100,
    JWT_SECRET: "L#kdh2i12#1",
  },
};

module.exports = config;
