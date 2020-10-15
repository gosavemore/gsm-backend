const express = require('express')
const router = express.Router()
const adminModel = require('../models/adminModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// login
router.post('/login', async (req, res) => {
  try {
    //
    let { username, password } = req.body
    let user = await adminModel.findUser({ username })
    console.log('user', user)
    console.log('user[0]', user[0])
    console.log('password', password)
    if (user.length === 0) {
      return res.status(404).json({ message: 'Username not found!' })
    }

    let passwordVerified = await bcrypt.compare(password, user[0].password)
    user = user[0]
    if (user && passwordVerified) {
      // make a token
      const token = generateToken({ user })
      // give them token
      res.status(200).json({
        message: `Welcome to Go Save More! ${user.username}`,
        id: user.id,
        token,
      })
    }
  } catch (err) {
    console.log('post error', err)
    // there's connection error
  }
})

function generateToken(user) {
  const payload = {
    username: user.username,
  }

  const options = {
    expiresIn: '1h',
  }

  return jwt.sign(payload, 'secret', options) // .env
}

router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log('hashedPassword', hashedPassword)
    let data = {
      ...req.body,
      password: hashedPassword,
    }
    console.log('data', data)
    adminModel
      .addUser(data)
      .then((user) => {
        console.log(user)
        res.status(200).json(user)
      })
      .catch((err) => console.log(err))
  } catch (err) {
    console.log('post error', err)
  }
})

module.exports = router
