
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "Gus", website: "austinkelsay.now.sh"},
        {username: "Austin", website: "austinkelsay.sh"},
        {username: "Jana"}
      ]);
    });
};
