const db = require("../data/db-config");

module.exports = {
  addCart,
  findCart,
  findByCartUserId,
  findByCartProductId,
  getUser,
  editCart,
};

function findCart() {
  return db("cart");
}

function findByCartUserId(id) {
  return db("cart")
    .join("product", "cart.product_id", "product.id")
    .join("user")
    .where({ user_id: id });
}
function findByCartProductId(id) {
  return db("cart")
    .join("product", "cart.product_id", "product.id")
    .where({ product_id: id });
}

function addCart(cart) {
  return db("cart").insert(cart);
}

function editCart(id, data) {
  return db("cart").where({ id }).update(data);
}

function getUser(id) {
  return db("cart")
    .join("product", "cart.product_id", "cart.id")
    .join("user", "cart.user_id", "cart.id")
    .select(
      "cart.id",
      "cart.user_id",
      "cart.product_id",
      "cart.quantity",
      "user.username",
      "user.email",
      "user.firstName",
      "user.lastName",
      "product.productName",
      "product.brand",
      "product.created_at",
      "product.updated_at",
      "product.shortDescription",
      "product.image"
    )
    .where({ user_id: id });
}
