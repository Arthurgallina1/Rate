exports.up = function (knex) {
  return knex.schema.createTable('friendship', function (table) {
    table.increments();
    table.integer('followed_id').notNullable();
    // table.foreign('followed_id').references('id').inTable('users');
    table.integer('following_id').notNullable();
    table.boolean('friendship').defaultTo(true);
    table.datetime('createdAt').defaultTo(knex.fn.now());
    table.datetime('updatedAt').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('friendship');
};
