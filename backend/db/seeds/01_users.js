exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'arthur',
          email: 'art@emai.com',
          password: '123456',
          username: 'arthur',
        },
        {
          name: 'arthuro',
          email: 'artVs@emai.com',
          password: '123456',
          username: 'tuca',
        },
        {
          name: 'testes',
          email: 'artVs@test.com',
          password: '123456',
          username: 'test',
        },
      ]);
    });
};
