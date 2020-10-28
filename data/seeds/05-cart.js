exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cart")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cart").insert([
        {
          user_id: 1,
          product_id: 2,
          savedForLater: true,
          quantity: 5,
        },
      ]);
    });
};

/**
 * itemsPrice: 25,
          shippingPrice: 25,
          taxPrice: 20,
          totalPrice: 60,
          paymentMethod: "paypal",
 */
