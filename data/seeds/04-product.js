exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex("product")
  //   .del()
  //   .then(function () {
  // Inserts seed entries
  return knex("product").insert([
    {
      category_id: 1,
      productName: "soda",
      image: "https://via.placeholder.com/150",
      brand: "coca cola",
      price: "25",
      shortDescription: "I pretty much awesome soda for you!",
      description: "Soda is good for your diabetes",
      ratings: 5,
      stock: 10,
    },
    {
      category_id: 4,
      productName: "UFC Canton 16oz",
      image: "https://via.placeholder.com/150",
      brand: "UFC",
      price: "3",
      shortDescription: "I pretty much awesome soda for you!",
      description:
        "UFC Canton is a perfect product to bring on any type of occasions especially in cold venues because it can really bring some heat to your body since it is made of rice flour. The noodles are soft and light and will not require so much time cooking so you will have more time mingling with your friends or family. Grab some of this UFC Canton now and have that great tasting pancit canton. Origin Philippines",
      ratings: 5,
      stock: 20,
    },
  ]);
  // });
};
