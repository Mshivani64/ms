const express = require('express');
const router = express.Router();
const userController = require('../../controllers/V1/userController');

router.post('/', userController.create);
router.get('/', userController.getAllUsers);
router.get('/:Ncode', userController.getUserById);
router.put('/:Ncode', userController.updateUser);
router.delete('/:Ncode', userController.deleteUser);

module.exports = router;
