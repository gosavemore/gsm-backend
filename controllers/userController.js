const express = require('express')

const UsersModel = require('../models/UsersModel')

const router = express.Router()

router.get('/', (req, res) => {
  UsersModel.find()
    .then((rev) => res.status(200).json(rev))
    .catch((err) => res.status(500).json({ err: err.message }))
})

module.exports = router
