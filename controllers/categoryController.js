const Category = require('../models/Category')

module.exports.postCategory = async (req, res) => {
  try {
    const category = await Category.create({ ...req.body })
    res.status(201).json(category)
  } catch (err) {
    const error = new Error(err)
    console.log('createCategory:', error.message)
    res.json(error.message)
  }
}

module.exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (err) {
    const error = new Error(err)
    console.log('getCategories:', error.message)
    res.json(error.message)
  }
}

module.exports.updateCategory = async (req, res) => {
  try {
    let updateData = { ...req.body }
    delete updateData.id
    const category = await Category.findOne({ where: { id: req.body.id } })
    const updatedCategory = await category.update(updateData)
    res.json(updatedCategory)
  } catch (err) {
    const error = new Error(err)
    console.log('updateCategory:', error.message)
    res.json(error.message)
  }
}

module.exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ where: { id: req.body.id } })
    await category.destroy()
    res.json(category)
  } catch (err) {
    const error = new Error(err)
    console.log('deleteCategory:', error.message)
    res.json(error.message)
  }
}
