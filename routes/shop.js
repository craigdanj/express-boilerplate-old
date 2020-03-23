const express = require('express');

const router = express.Router();

//Test routes
router.get('/redirect', (req, res, next) => {
    console.log('redirecting to home');
    res.redirect('/');
});


router.get('/', (req, res, next) => {
    res.send('<h1>Home</h1>');
});



module.exports = router;