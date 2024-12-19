const { Model } = require("sequelize");
const sequelize = require("../database/databese_connection.js");

class Clicks extends Model { }

Clicks.init(
    {
        userName: {
            type: String,
            unique: true,
        },
        click: {
            type: String,
        },
        theBest: {
            type: String,
        },
    },
    {
        sequelize,
        moduleName: "clicks",
    }
);

module.exports = Clicks;
