
exports.up = function(knex, Promise) {
	return knex.schema.createTable('userinfo',function(table){
		table.increments();
		table.string('name').notNullable();
		table.string('email').notNullable();
		table.timestamp('createat').defaultTo(knex.fn.now());
		table.timestamp('updateat').defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userinfo')
};