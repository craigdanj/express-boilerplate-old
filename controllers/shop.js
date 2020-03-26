exports.redirect = (req, res, next) => {
    res.redirect('/');
};

exports.home = (req, res, next) => {
    res.send('<h1>Home</h1>');
};
