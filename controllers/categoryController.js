const Category = require('../models/Category')

module.exports.getExpense = async (req, res) => {
  res.send('getApp')
}

module.exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create({ ...req.body, id: 1 })
    res.status(201).json(category)
  } catch (err) {
    const error = new Error(err)
    console.log('createCategory:', error.message)
    res.json(error.message)
  }
}
