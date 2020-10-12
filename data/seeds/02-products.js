
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          productName: 'Soda',
          price: "25",
          shortDescription: "I pretty much awesome soda for you!",
          description: "Soda is good for your diabetes",
          stock: 10
        }
      ]);
    });
};
