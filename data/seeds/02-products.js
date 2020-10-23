exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {
          productName: "soda",
          image: "https://via.placeholder.com/150",
          brand: "coca cola",
          price: "25",
          shortDescription: "I pretty much awesome soda for you!",
          description: "Soda is good for your diabetes",
          ratings: 5,
          stock: 10,
          category: "Drinks",
        },
      ]);
    });
};
