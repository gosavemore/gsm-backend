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
  return db("products");
}

function findByName(productName) {
  return db("products").where({ productName }).first();
}

function findById(id) {
  return db("products").where(id).first();
}

function addProduct(newProduct) {
  return db("products").insert(newProduct);
}

function editProduct(product, data) {
  return db("products").where(product).update(data); // TBC
}

function deleteProduct(product) {
  return db("products").where(product).del(); // where id=id
}
