const express = require("express");
const userController = require("../controllers/userC.js");
const moneyController = require("../controllers/moneyC.js");
const logoutController = require("../controllers/logoutC.js");

const UserCreateMW = require("../middlewares/userCreateMW.js");

const theRouter = express.Router();


theRouter.route("/feed").post(moneyController.feed);

theRouter.route("/add").post(UserCreateMW, userController.add);

theRouter.route("/money").get(moneyController.balance);

theRouter.route("/logout").post(logoutController);



module.exports = theRouter;
