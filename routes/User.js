const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.post('/', userController.postUser)
router.post('/login', userController.loginUser)
router.get('/', userController.getUsers)
router.put('/', userController.updateUser)
router.delete('/', userController.deleteUser)

module.exports = router
