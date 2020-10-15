const express = require('express')
const router = express.Router()
const adminModel = require('../models/adminModel.js')
const bcrypt = require('bcrypt')

// login
router.get('/login', (req, res) => {
  //
})

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
  } catch (err) {}
})

module.exports = router
