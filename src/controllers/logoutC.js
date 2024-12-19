const logoutController = async (req, res) => {

    res.clearCookie('user');
    res.redirect('/');
}


module.exports = logoutController;
