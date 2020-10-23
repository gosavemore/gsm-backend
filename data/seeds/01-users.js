exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "admin",
          email: "gosavemore@gmail.com",
          password: "1234admin",
          firstName: "gosave",
          lastName: "more",
          houseNumber: "123 house",
          streetName: "main street",
          city: "somewhere",
          zip: 999,
          state: "FL",
          country: "USA",
          isAdmin: true,
        },
      ]);
    });
};
