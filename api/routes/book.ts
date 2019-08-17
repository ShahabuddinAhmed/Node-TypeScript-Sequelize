const express = require('express');
const router = express.Router();
const bookController = require('./../controller/book');

router.get('/all', bookController.getAllUser);
router.post('/register', bookController.registerUser);
// // router.post('/login', bookController.loginUser);
// // router.get('/:userID', bookController.getOneUser, checkUserAuth);
// // router.patch('/update/:userID', bookController.updateUser, checkUserAuth);
// // router.delete('/delete/:userID', bookController.deleteUser, checkUserAuth);

// module.exports = router;