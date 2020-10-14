const express = require('express')

const ProductModel = require('../models/productsModel')

const router = express.Router()

router.get('/', (req, res) => {
  ProductModel.find()
    .then((rev) => res.status(200).json(rev))
    .catch((err) => res.status(500).json({ err: err.message }))
})

// add
router.post('/', (req, res) => {
  const newProduct = res.body
  ProductModel.add(newProduct)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ err: err.message }))
})

// find by.... name, id? price?
// router.get('/')

router.put('/', (req, res) => {
  ProductModel.editProduct
})

router.delete('/:id', (req, res) => {
  const id = res.header
  ProductModel.deleteProduct(id)
    .then((del = res.status(200).json({ msg: 'Product deleted' })))
    .catch((err = res.status(500).json({ err: err.message })))
})

module.exports = router
