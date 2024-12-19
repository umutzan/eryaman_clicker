class pageController {
    async index(req, res) {

        res.render("index")

    }

    async play(req, res) {

        res.render("play")

    }





}

module.exports = new pageController();