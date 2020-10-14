exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('shoppingCart')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppingCart').insert([
        {
          username: 'sean',
          productName: 'chips',
        },
      ])
    })
}
