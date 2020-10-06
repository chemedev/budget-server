const Expense = require('../models/Expense')

module.exports.postExpense = async (req, res) => {
  console.log(req.body)
  try {
    const expense = await Expense.create({ ...req.body, userId: 1 })
    res.status(201).json(expense)
  } catch (err) {
    const error = new Error(err)
    console.log('createExpense:', error.message)
    res.json(error.message)
  }
}

module.exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll({
      order: [['createdAt', 'DESC']]
    })
    res.json(expenses)
  } catch (err) {
    const error = new Error(err)
    console.log('getExpenses:', error.message)
    res.json(error.message)
  }
}

module.exports.updateExpense = async (req, res) => {
  try {
    let updateData = { ...req.body }
    delete updateData.id
    delete updateData.categoryId
    const expense = await Expense.findOne({ where: { id: req.body.id } })
    const updatedExpense = await expense.update(updateData)
    res.json(updatedExpense)
  } catch (err) {
    const error = new Error(err)
    console.log('updateExpense:', error.message)
    res.json(error.message)
  }
}

module.exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOne({ where: { id: req.body.id } })
    await expense.destroy()
    res.json(expense)
  } catch (err) {
    const error = new Error(err)
    console.log('deleteExpense:', error.message)
    res.json(error.message)
  }
}
