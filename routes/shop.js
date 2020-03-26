const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

//Test routes
router.get('/redirect', shopController.redirect);


router.get('/', shopController.home);



module.exports = router;