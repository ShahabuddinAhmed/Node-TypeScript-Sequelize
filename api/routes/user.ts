import express from 'express';
const router = express.Router();
const userController = require('./../controller/user');

router.get('/', userController.getAllUser);
router.post('/register', userController.registerUser);
// router.post('/login', userController.loginUser);
// router.get('/:userID', userController.getOneUser, checkUserAuth);
// router.patch('/update/:userID', userController.updateUser, checkUserAuth);
// router.delete('/delete/:userID', userController.deleteUser, checkUserAuth);

module.exports = router;