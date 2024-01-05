// routes/countryRoutes.js
const express = require('express');
const countryController = require('../../controllers/V1/countryController');

const router = express.Router();

router.post('/', countryController.createCountry);
router.get('/', countryController.getCountries);
router.get('/:Ncode', countryController.getCountryById);
router.put('/:Ncode', countryController.updateCountryStatus);
router.delete('/:Ncode', countryController.deleteCountry);

module.exports = router;
