const express = require('express');
const router = express.Router();
const documentMasterController = require('../../controllers/V1/documentMasterController');


router.post('/', documentMasterController.createDocument);
router.get('/', documentMasterController.getAllDocuments);
router.get('/:Ncode', documentMasterController.getDocumentById);
router.put('/:Ncode', documentMasterController.UpdateDocument);
router.delete('/:Ncode', documentMasterController.deleteDocument);

module.exports = router;
