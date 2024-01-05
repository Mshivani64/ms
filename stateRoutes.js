const express = require('express');
const stateController = require('../../controllers/V1/stateController');
const router = express.Router();


router.post('/', stateController.createState); 
router.get('/', stateController.getAllStates); 
router.get('/:Ncode', stateController.getStateById); 
router.get('/country/:Ncode', stateController.getStateByCountryId);
router.get('/countryy/:Ncode', stateController.getAllCountry);
router.delete('/:Ncode', stateController.deleteState);
router.put('/:Ncode', stateController.UpdatedState)

module.exports = router;
