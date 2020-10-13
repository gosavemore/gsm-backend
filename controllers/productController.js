const express = require('express')

const ProductModel = require('../models/productsModel')

const router = express.Router()

router.route('/', (req, res) => {
  ProductModel.find()
    .then((res) => res.status(200).json(res))
    .catch((err) => res.status(500).json({ err: err.message }))
})

module.exports = router
