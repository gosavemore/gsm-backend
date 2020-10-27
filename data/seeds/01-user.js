exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        {
          username: "admin",
          email: "gosavemore@gmail.com",
          password: "1234admin",
          firstName: "gosave",
          lastName: "more",
          isAdmin: false,
        },
      ]);
    });
};
