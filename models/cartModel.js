const db = require("../data/db-config");

module.exports = {
  addCart,
  find,
  findByUserId,
  findByProductId,
  getUser,
};

function find() {
  return db("cart");
}

function findByUserId(id) {
  return db("cart").where({ user_id: id });
}

function findByProductId(id) {
  return db("cart").where({ product_id: id });
}

function addCart(cart) {
  return db("cart").insert(cart);
}

function getUser(id) {
  return db("cart")
    .join("product")
    .join("user")
    .select(
      "cart.id",
      "user.id",
      "user.username",
      "user.email",
      "user.firstName",
      "user.lastName",
      "user.houseNumber",
      "user.streetName",
      "user.city",
      "user.zip",
      "user.state",
      "user.country",
      "product.id",
      "product.productName",
      "product.brand",
      "product.created_at",
      "product.updated_at",
      "product.shortDescription",
      "product.image",
      "cart.isPaid",
      "cart.quantity"
    )
    .where({ user_id: id });
}
