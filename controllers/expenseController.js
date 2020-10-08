const Expense = require('../models/Expense')
const jwt = require('jsonwebtoken')

module.exports.postExpense = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  if (!token) throw new Error('Invalid token.')
  const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY)
  try {
    const expense = await Expense.create({ ...req.body, userId: id })
    res.status(201).json(expense)
  } catch (err) {
    const error = new Error(err)
    console.log('createExpense:', error.message)
    res.json(error.message)
  }
}

module.exports.getExpenses = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) return res.status(403).json('Invalid token')
    const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY)

    const expenses = await Expense.findAll({
      where: { userId: id },
      order: [['createdAt', 'DESC']]
    })
    res.json(expenses)
  } catch (err) {
    const error = new Error(err)
    console.log('getExpenses:', error.message)
    res.status(403).json(error.message)
  }
}

module.exports.updateExpense = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) throw new Error('Invalid token.')
    const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY)

    let updateData = { ...req.body }
    delete updateData.id
    delete updateData.isIncome
    const expense = await Expense.findOne({
      where: { userId: id, id: req.body.id }
    })
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
    const token = req.headers.authorization.split(' ')[1]
    if (!token) throw new Error('Invalid token.')
    const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY)

    const expense = await Expense.findOne({
      where: { userId: id, id: req.body.id }
    })
    await expense.destroy()
    res.json(expense)
  } catch (err) {
    const error = new Error(err)
    console.log('deleteExpense:', error.message)
    res.json(error.message)
  }
}
