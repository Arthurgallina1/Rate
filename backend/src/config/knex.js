const knex = require('knex')({
  client: 'postgres',
  connection: {
    host: 'localhost:5432',
    user: 'postgres',
    password: 'docker',
    database: 'rate',
  },
});
