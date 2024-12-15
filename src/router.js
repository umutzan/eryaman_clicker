const express = require("express");
const userController = require("./controllers/userC.js");
const moneyController = require("./controllers/moneyC.js");


const theRouter = express.Router();


theRouter.route("/feed").post(moneyController.feed);

theRouter.route("/add").post(userController.add);

theRouter.route("/money").get(moneyController.balance);



module.exports = theRouter;
