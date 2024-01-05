const express = require('express');
const router = express.Router();
const branchController = require('../../controllers/V1/branchController');


router.post('/', branchController.createBranch);
router.get('/', branchController.getAllBranches);
router.get('/:Ncode', branchController.getBranchById);
router.put('/:Ncode', branchController.UpdateBranch);
router.delete('/:Ncode', branchController.deleteBranch);

module.exports = router;
