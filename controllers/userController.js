const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } })
    if (!user) throw new Error('Wrong credentials')
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    )
    if (!isPasswordValid) throw new Error('Wrong credentials')
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '1d'
      }
    )
    res.json({ token })
  } catch (error) {
    console.log('loginUser:', error.message)
    res.status(403).json(error.message)
  }
}

module.exports.postUser = async (req, res) => {
  try {
    const alreadyExists = await User.findOne({
      where: { email: req.body.email }
    })
    if (alreadyExists) return res.json({ error: 'Email already registered' })
    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    const user = await User.create({ ...req.body, password: hashedPassword })
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '1d'
      }
    )
    res.status(201).json({ token })
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
