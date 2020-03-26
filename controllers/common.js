exports.get404 = (req, res ,next) => {
    //The 404 route
    res.status(404).render('404', { pageTitle: "Page Not Found"});
};
