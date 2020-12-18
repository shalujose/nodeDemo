const mysql = require("mysql");
const pool = mysql.createPool({

    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    connectionLimit: process.env.NO_OF_CONNECTIONS
});

module.exports = pool;
