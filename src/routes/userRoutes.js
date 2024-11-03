const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/user/new', userController.create);

module.exports = router;