const User = require('../models/User')

module.exports.createUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    res.status(201).json(user)
  } catch (err) {
    const error = new Error(err)
    console.log('createUser:', error.message)
    res.json(error.message)
  }
}
