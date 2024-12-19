const clicks = require("../models/clicks.js")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class moneyController {
    async balance(req, res) {
        await clicks.findOne({ where: { userName: req.cookies.user } }).then((data) => {
            if (data == null) {
                console.log("null");
                res.json("null");

            } else {
                res.json(data);
            }
        })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }

    async feed(req, res) {

        await clicks.findOne({ where: { userName: req.cookies.user } }).then((data) => {
            if (data) {

                if (getRandomInt(100) == 1) {

                    if(data.click>data.theBest){
                        data.theBest=data.click;
                    }

                    var newClick = 0;
                    data.click = newClick;
                    data.save();
                    res.status(200).json({ "status": "zabita" });

                } else if (getRandomInt(10) == 1) {

                    var newClick = data.click + 5;
                    data.click = newClick;
                    data.save();
                    res.status(200).json({ "status": "ermamasBurger" });

                } else {

                    var newClick = data.click + 1;
                    data.click = newClick;
                    data.save();
                    res.status(200).json({ "status": "biLira" });

                }

            } else {
                res.status(400);
            }
        })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });


    }


}

module.exports = new moneyController();