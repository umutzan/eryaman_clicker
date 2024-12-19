const UserCreateMW = async (req, res, next) => {

    res.cookie('user', req.body.name, { maxAge: 24 * 60 * 60 * 1000 * 365 });
    next();

}


module.exports = UserCreateMW;
