const express = require('express');
const cityController = require('../../controllers/V1/cityController');
const router = express.Router();

router.post('/', cityController.insertCity); 
router.get('/', cityController.getAllCities); 
router.get('/:Ncode', cityController.getCityById); 
router.get('/states/:Ncode', cityController.getStateByCountryId); 
router.delete('/:Ncode', cityController.deleteCity); 
router.put('/:Ncode', cityController.updateCity);
module.exports = router;
