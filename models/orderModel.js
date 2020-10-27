const db = require("../data/db-config");

module.exports = {
  addOrder,
  find,
  findByUserId,
  findByProductId,
  getUser,
};

function find() {
  return db("order");
}

function findByUserId(id) {
  return db("order").where({ user_id: id });
}

function findByProductId(id) {
  return db("order").where({ product_id: id });
}

function addOrder(order) {
  return db("order").insert(order);
}

function getUser(id) {
  return db("order")
    .join("product")
    .join("user")
    .select(
      "order.id",
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
      "order.paymentMethod",
      "order.quantity",
      "order.itemsPrice",
      "order.shippingPrice",
      "order.taxPrice",
      "order.totalPrice"
    )
    .where({ user_id: id });
}
