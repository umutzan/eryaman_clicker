const clicks = require("../models/clicks.js")

class userController {
    async add(req, res) {

        await clicks.findOne({ where: { userName: req.body.name } }).then((data) => {
            if (data) {

                res.status(200);

            } else {

                clicks.create({ "userName": req.body.name, "click": 0, "theBest": 0 }).then((data) => {

                    res.status(200);


                }).catch((err) => {
                    console.log(err);
                    res.status(500).json(err);
                });
            }
            res.status(200);

        })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });




        res.status(200).json({});


    }


}

module.exports = new userController();