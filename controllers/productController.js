const express = require('express')

const ProductModel = require('../models/productsModel')

const router = express.Router()

router.get('/', (req, res) => {
  ProductModel.find()
    .then((rev) => res.status(200).json(rev))
    .catch((err) => res.status(500).json({ err: err.message }))
})

module.exports = router
