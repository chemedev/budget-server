const express = require('express')
const router = express.Router()

const expenseController = require('../controllers/expenseController')

router.post('/', expenseController.postExpense)
router.get('/', expenseController.getExpenses)
router.put('/', expenseController.updateExpense)
router.delete('/', expenseController.deleteExpense)

module.exports = router
