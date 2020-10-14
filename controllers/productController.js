const express = require('express')
const ProductModel = require('../models/productsModel')

const router = express.Router()

router.get('/', (req, res) => {
  ProductModel.find()
    .then((rev) => res.status(200).json(rev))
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.get('/:productName', (req, res) => {
  const productName = res.body
  ProductModel.findByName(productName)
    .then((name) => res.status(200).json(name))
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.post('/', (req, res) => {
  const newProduct = res.body
  ProductModel.add(newProduct)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.put('/:productName', (req, res) => {
  const { productName } = req.params
  ProductModel.findByName({ productName })
  if (!productName) {
    res.status(404).json({ message: 'That user does not exist.' })
  } else {
    const changes = req.body
    ProductModel.editProduct({ productName }, changes)
      .then((product) => res.status(200).json({ updated }))
      .catch((err) => res.status(500).json({ err: err.message }))
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  ProductModel.deleteProduct(id)
    .then((del = res.status(200).json({ msg: 'Product deleted' })))
    .catch((err = res.status(500).json({ err: err.message })))
})

module.exports = router
