const clicks = require("../models/clicks.js")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class moneyController {
    async balance(req, res) {
        await clicks.findOne({ where: { id: 1 } }).then((data) => {
            if (data == null) {
                console.log("null");
                res.json("null");

            } else {
                res.json(data);
            }
        })
    }

    async feed(req, res) {
        await clicks.findOne({ where: { id: 1 } }).then((data) => {
            if (data) {

                if (getRandomInt(100) == 1) {

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


    }


}

module.exports = new moneyController();