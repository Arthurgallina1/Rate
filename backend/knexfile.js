module.exports = {
  development: {
    client: 'postgres',
    connection: {
      user: 'postgres',
      password: 'docker',
      database: 'rate',
    },
    migrations: {
      // tableName: 'knex_migrations',
      directory: './db/migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
