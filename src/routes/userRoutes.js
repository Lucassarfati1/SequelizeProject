const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/user/new', userController.create);
router.patch('/user/update/:id', userController.update);
router.patch('/user/upsert', userController.upsert);
router.post('/user/destroy/:id', userController.destroy);
router.delete('/user/destroy/email', userController.destroyByEmail);

module.exports = router;