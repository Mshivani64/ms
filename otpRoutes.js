const express = require('express');
const router = express.Router();
const otpController = require('../../controllers/V1/otpController');

// router.post('/', otpController.generateOTP);
router.post('/', otpController.generateOTP);

module.exports = router;