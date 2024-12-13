const express = require("express");


const theRouter = express.Router();


theRouter.route("/feed").post();

theRouter.route("/money").get();



module.exports = theRouter;
