const clicks = require("../models/clicks.js")

class userController {
    async add(req, res) {

        clicks.create({ "click": 0 }).then((data) => {

            res.status(200).json(data);


        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

    }


}

module.exports = new userController();