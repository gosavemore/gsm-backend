const db = require("../data/db-config");

module.exports = {
  find,
  findByName,
  findById,
  addProduct,
  deleteProduct,
  editProduct,
};

function find() {
  return db("product");
}

function findByName(productName) {
  return db("product").where({ productName }).first();
}

function findById(id) {
  return db("product").where(id).first();
}

function addProduct(newProduct) {
  return db("product").insert(newProduct);
}

function editProduct(product, data) {
  return db("product").where(product).update(data); // TBC
}

function deleteProduct(product) {
  return db("product").where(product).del(); // where id=id
}
