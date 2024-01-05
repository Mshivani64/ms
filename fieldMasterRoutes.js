// routes/fieldMasterRoutes.js
const express = require('express');
const router = express.Router();
const fieldMasterController = require('../../controllers/V1/fieldMasterController');

router.post('/', fieldMasterController.createOrUpdateFieldMaster);
router.get('/', fieldMasterController.getAllFieldMasters);
router.get('/:Ncode', fieldMasterController.getFieldMasterById);
router.put('/:Ncode', fieldMasterController.UpdateFieldMaster);
router.delete('/:Ncode', fieldMasterController.deleteFieldMaster);

module.exports = router;
