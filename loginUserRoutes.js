const express = require('express');
const router = express.Router();
const authController = require('../../controllers/V1/loginUser');

router.post('/user', authController.userLogin);

module.exports = router;
