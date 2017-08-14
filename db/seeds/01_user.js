
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userinfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('userinfo').insert([
        {id: 1, name: 'Amit Shakya', email: 'amit0shakya@gmail.com'},
        {id: 2, name: 'Gaurav', email: 'Gaurav@gmail.com'},
        {id: 3, name: 'Sachin', email: 'Sachin@gmail.com'},
        {id: 4, name: 'Pushkar', email: 'Pushkar@gmail.com'},
      ]);
    });
};
