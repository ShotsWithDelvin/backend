const bcrypt = require('bcrypt')


exports.seed = async function(knex) {
  await knex.raw('TRUNCATE users RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE TABLE comments RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE TABLE photos RESTART IDENTITY CASCADE')
  await knex.raw('TRUNCATE TABLE likes RESTART IDENTITY CASCADE')


  await knex('users').insert([
    { username: 'DelvinReyesOfficial', name: 'Delvin Reyes', email: 'DelvinReyes.95@Gmail.com', password: bcrypt.hashSync('123', 10)}
  ]);

  await knex('photos').insert([
    { url: ''}
  ]);

  await knex('comments').insert([
    { commentary: 'One of my best work', photos_id: 1, users_id: 1}
  ]);

  await knex('likes').insert([
    { users_id: 1, photos_id: 1}
  ]);
};



