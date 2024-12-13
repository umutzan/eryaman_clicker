const Sequelize = require("sequelize");
const db = new Sequelize("db", "root", "root", {
    dialect: "sqlite",
    host: "./src/database/database.sqlite"
});

module.exports = db;