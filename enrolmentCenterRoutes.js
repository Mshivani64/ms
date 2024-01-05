const express = require('express');
const router = express.Router();
const enrolmentCenterController = require('../../controllers/V1/EnrolmentCenterController');



router.post('/', enrolmentCenterController.insertEnrolmentCenter);
router.get('/', enrolmentCenterController.getallEnrolmentCenter);
router.get('/:Ncode', enrolmentCenterController.getEnrolmentCenterById);
router.get('/PostalCode/:PostalCode', enrolmentCenterController.getLocationByPostalId );
router.put('/:Ncode', enrolmentCenterController.updateEnrolmentCenter);
router.delete('/:Ncode', enrolmentCenterController.deleteEnrolmentCenter);

module.exports = router;
