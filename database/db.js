// const mysql = require("mysql2/promise");
// const config = require("./config");

// let connection;

// const connect = async () => {
//   try {
//     connection = await mysql.createConnection(config.db);
//     console.log("=================================");
//     console.log(`>>>> Connection to ${process.env.DB_NAME} successful`);
//     console.log("=================================");
//   } catch (error) {
//     console.error(`>>> Error connecting to ${process.env.DB_NAME}`, error);
//     process.exit();
//   }
// };

// const query = async (sql, params) => {
//   try {
//     if (!connection || connection.state === "disconnected") {
//       await connect();
//     }

//     const [results] = await connection.execute(sql, params);
//     return results;
//   } catch (error) {
//     console.error(`Query error -> ${sql}: ${error}`);
//     throw new Error(error);
//   }
// };

// module.exports = {
//   query,
//   connection,
//   connect,
// };

// db.js

const mysql = require("mysql2/promise");
const config = require("./config");

const pool = mysql.createPool(config.db);

const query = async (sql, params) => {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.execute(sql, params);
    return results;
  } finally {
    connection.release(); // Release the connection back to the pool
  }
};

module.exports = {
  query,
};
