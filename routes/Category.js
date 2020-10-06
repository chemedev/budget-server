const express = require('express')
const router = express.Router()

const categoryController = require('../controllers/categoryController')

router.post('/', categoryController.postCategory)
router.get('/', categoryController.getCategories)
router.put('/', categoryController.updateCategory)
router.delete('/', categoryController.deleteCategory)

module.exports = router
