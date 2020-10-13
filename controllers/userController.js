const express = require('express')

const UsersModel = require('../models/UsersModel')

const router = express.Router()

router.route('/', (req, res) => {
  UsersModel.find()
    .then((res) => res.status(200).json(res))
    .catch((err) => res.status(500).json({ err: err.message }))
})

module.exports = router
