// routes/userRoleRoutes.js
const express = require('express');
const router = express.Router();
const userRoleController = require('../../controllers/V1/userRoleController');


router.post('/', userRoleController.createOrUpdateUserRole);
router.get('/', userRoleController.getAllUserRoles);
router.get('/:Ncode', userRoleController.getUserRoleById);
router.put('/:Ncode', userRoleController.updateUserRole);
router.delete('/:Ncode', userRoleController.deleteUserRole);

module.exports = router;

