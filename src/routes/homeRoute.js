const homeController = require('../app/controllers/homeController');
const router = require('express').Router();

router.get('/', homeController.index);
router.get('/search', homeController.search);


module.exports = router;