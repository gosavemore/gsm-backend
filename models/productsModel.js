const db = require('../data/db-config')

module.exports = {
  find,
  findByName,
  addProduct,
  deleteProduct,
  editProduct,
}

function find() {
  return db('products')
}

function findByName(productName) {
  return 'products'.where({ productName }).first()
}

function addProduct(newProduct) {
  return db('products').insert(newProduct)
}

function editProduct() {
  return db('products') // TBC
}

function deleteProduct(productName) {
  return db('products').where(productName).del() // where id=id
}
