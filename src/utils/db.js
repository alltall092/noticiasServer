const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
  database: process.env.DB_NAME || "bcko2r2vs07w13gfltyg",
  username: process.env.DB_USER || "umhsbrzdm8dn6fvx",
  host: process.env.DB_HOST || "bcko2r2vs07w13gfltyg-mysql.services.clever-cloud.com",
  port: process.env.DB_PORT || 3306,
  password: process.env.DB_PASSWORD || "10ser9vkHHMhvXmEz5Kf",
  dialect: "mysql",
  logging: false,
});

module.exports = db;