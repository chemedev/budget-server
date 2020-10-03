const Expense = require('../models/Expense')

module.exports.createExpense = async (req, res) => {
  try {
    const expense = await Expense.create({ ...req.body, userId: 1 })
    console.log(expense)
    res.status(201).json(expense)
  } catch (err) {
    const error = new Error(err)
    console.log('createExpense:', error.message)
    res.json(error.message)
  }
}
