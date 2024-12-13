const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const database = require("./database/databese_connection");
const theRouter = require("./router.js");

const app = express();

database.sync().then((result) => {
    app.use(cors());
    app.use(express.static("public"));
    app.use(cookieParser());

    app.set("view engine", "ejs");
    app.use(express.json());

    app.use("/data", theRouter);

    app.listen(8080, () => {
        console.log("listening port 8080");
    });

}).catch((err) => {
    console.log(err);

});
