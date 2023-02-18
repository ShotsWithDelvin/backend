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
    { name: 'Tessa', url: 'tessa.JPG'}, { name:'Shoniah', url:'shoniah.JPG'}, { name:'Sirrea', url:'sirrea.JPG'}, { name:'Sirrea', url:'sirrea2.JPG'}, { name:'Karen', url:'karen.JPG'}, { name:'Cassidy', url:'cassidy.JPG'}, { name:'Rachely', url:'rachely.JPG'}, { name:'Zianna', url:'zianna.JPG'}, { name:'Zianna', url:'zianna2.JPG'}, { name:'Cesar', url:'cesar.JPG'}, { name:'Nacier', url:'nacier.JPG'}, { name:'Devonte', url:'devonte.JPG'}, { name:'Jorden', url:'jorden.JPG'}, { name:'Jordan', url:'jordan.JPG'}
  ]);

  await knex('comments').insert([
    { commentary: 'One of my best work', photos_id: 1, users_id: 1}
  ]);

  await knex('likes').insert([
    { users_id: 1, photos_id: 1}
  ]);
};



