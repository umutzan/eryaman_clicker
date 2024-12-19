const clicks = require("../models/clicks.js")

class isUserLoginMW {
    async root(req, res, next) {
        await clicks.findOne({ where: { userName: req.cookies.user } }).then((data) => {

            res.redirect('/play');

        }).catch((err) => {

            next();

        });
    }

    async play(req, res, next) {

        await clicks.findOne({ where: { userName: req.cookies.user } }).then((data) => {

            next();

        }).catch((err) => {

            res.redirect('/');

        });


    }


}

module.exports = new isUserLoginMW();