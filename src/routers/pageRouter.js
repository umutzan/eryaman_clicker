const express = require("express");
const pageController = require("../controllers/pageC.js");

const isUserLoginMW = require("../middlewares/isUserLoginMW.js");


const theRouter = express.Router();


theRouter.route("/").get(isUserLoginMW.root, pageController.index);

theRouter.route("/play").get(isUserLoginMW.play, pageController.play);




module.exports = theRouter;
