// routes/localityRoutes.js

const express = require('express');
const router = express.Router();
const localityController = require('../../controllers/V1/localityController');


router.post('/', localityController.createLocality);
router.get('/', localityController.getAllLocalities);
router.get('/:Ncode', localityController.getLocalityById);
router.get('/citys/:Ncode', localityController.getCityBystateId);
router.put('/:Ncode', localityController.updateLocality);
router.delete('/:Ncode', localityController.deleteLocality);

module.exports = router;
