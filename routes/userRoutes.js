const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');






router.delete('/deleteMe', userController.deleteMe);
router.post('/addUser',userController.addUser)


router
    .route('/')
    .get(userController.getAllUsers);


router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;