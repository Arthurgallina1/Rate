exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.string('avatar_url');
    table.datetime('createdAt').defaultTo(knex.fn.now());
    table.datetime('updatedAt').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
