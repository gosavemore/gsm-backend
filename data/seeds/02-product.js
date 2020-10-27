exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("product")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("product").insert([
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
        {
          productName: "Wise Soda",
          image: "https://via.placeholder.com/150",
          brand: "Pepsi",
          price: 25,
          shortDescription: "I pretty much awesome soda for you!",
          description: "Soda is good for your diabetes",
          ratings: 4,
          stock: 10,
          category: "Drinks",
        },
      ]);
    });
};
