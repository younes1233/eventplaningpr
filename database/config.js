require("dotenv").config();
const config = {
  db: {
    host: process.env.DB_HOST || "72.167.211.165",
    user: process.env.DB_USER || "younes_social",
    port: 3306,
    password: process.env.DB_PASS || "younes1231",
    database: process.env.DB_NAME || "EventPlanningDB",
    connectionLimit: 10,
    JWT_SECRET: "L#kdh2i12#1",
  },
};

module.exports = config;
