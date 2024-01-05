const express = require('express');
const router = express.Router();
const bookAppointmentController = require('../../controllers/V1/bookAppointmentController');

router.post('/', bookAppointmentController.bookAppointment);
// router.get('/', bookAppointmentController.getAllAppointments);
module.exports = router;