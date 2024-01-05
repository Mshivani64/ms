const express = require('express');
const router = express.Router();
const Appointment = require('../../controllers/V1/AppointmentSlotController');



router.post('/', Appointment.insertAppointment);
router.get('/', Appointment.getallAppointment);
router.get('/:Ncode', Appointment.getAppointmentById);
router.put('/:Ncode', Appointment.updateAppointment );
router.delete('/:Ncode', Appointment.deleteAppointment);

module.exports = router;
