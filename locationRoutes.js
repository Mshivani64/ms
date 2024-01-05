const express = require('express');
const locationController = require('../../controllers/V1/locationController');

const router = express.Router();

router.post('/', locationController.createLocation); 
router.get('/', locationController.getAllLocations); 
router.get('/:Ncode', locationController.getLocationById); 
router.put('/:Ncode', locationController.updateLocation);
router.delete('/:Ncode', locationController.deleteLocation);

module.exports = router;
