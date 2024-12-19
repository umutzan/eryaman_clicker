const clicks = require("../models/clicks.js")

class isUserLoginMW {
    async root(req, res, next) {
        await clicks.findOne({ where: { userName: req.cookies.user } }).then((data) => {
            if (data) {

                res.redirect('/play');

            } else {

                next();

            }

        }).catch((err) => {

            next();

        });
    }

    async play(req, res, next) {

        await clicks.findOne({ where: { userName: req.cookies.user } }).then((data) => {
            if (data) {
                next();
            } else {
                res.redirect('/');

            }

        }).catch((err) => {

            res.redirect('/');

        });


    }


}

module.exports = new isUserLoginMW();