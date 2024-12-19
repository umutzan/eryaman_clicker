const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require('path');
const database = require("./database/databese_connection");
const apiRouter = require("./routers/apiRouter.js");
const pageRouter = require("./routers/pageRouter.js");

const app = express();

database.sync().then((result) => {
    app.use(cors());
    app.use(express.static("public"));
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));
    app.set("view engine", "ejs");
    app.use(express.json());

    app.use("/data", apiRouter);
    app.use("/", pageRouter);

    app.listen(8081, () => {
        console.log("listening port 8081");
    });

}).catch((err) => {
    console.log(err);

});
