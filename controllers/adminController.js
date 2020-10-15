const express = require('express')

const AdminModel = require('../models/adminModel')

const router = express.Router()

// Get All Users
router.get('/', (req, res) => {
  AdminModel.getUsers()
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ err: err.message }))
})

// find user
router.get('/:username', (req, res) => {
  let { username } = req.params
  console.log(username)
  AdminModel.findUser({ username }).then((userData) => {
    const user = userData[0]
    res.status(200).json({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      houseNumber: user.houseNumber,
      streetName: user.streetName,
      city: user.city,
      zip: user.zip,
      state: user.state,
      country: user.country,
    })
  })
})

module.exports = router
