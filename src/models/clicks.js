const { Model } = require("sequelize");
const sequelize = require("../database/databese_connection.js");

class Clicks extends Model { }

Clicks.init(
    {
        click: {
            type: String,
        },
    },
    {
        sequelize,
        moduleName: "clicks",
    }
);

module.exports = Clicks;
