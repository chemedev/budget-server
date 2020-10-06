const User = require('../models/User')

module.exports.postUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    res.status(201).json(user)
  } catch (err) {
    const error = new Error(err)
    console.log('createUser:', error.message)
    res.json(error.message)
  }
}

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    const error = new Error(err)
    console.log('getUsers:', error.message)
    res.json(error.message)
  }
}

module.exports.updateUser = async (req, res) => {
  try {
    const user = await User.update(
      { ...req.body },
      {
        where: { id: req.body.id },
        returning: true,
        plain: true
      }
    )
    res.json(user[1])
  } catch (err) {
    const error = new Error(err)
    console.log('updateUser:', error.message)
    res.json(error.message)
  }
}

module.exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.body.id } })
    await user.destroy()
    res.json(user)
  } catch (err) {
    const error = new Error(err)
    console.log('deleteUser:', error.message)
    res.json(error.message)
  }
}
