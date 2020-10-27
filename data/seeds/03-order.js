exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("order")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("order").insert([
        {
          user_id: 1,
          product_id: 1,
          paymentMethod: "paypal",
          quantity: 5,
          itemsPrice: 25,
          shippingPrice: 25,
          taxPrice: 20,
          totalPrice: 60,
        },
      ]);
    });
};
