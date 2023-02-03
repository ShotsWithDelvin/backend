exports.seed = async function(knex) {
  await knex('users').del()
  await knex('comments').del()
  await knex('photos').del()
  await knex('likes').del()


  await knex('users').insert([
    {username: 'DelvinReyesOfficial', name: 'Delvin Reyes', email: 'DelvinReyes.95@Gmail.com', password: 'wethegreatest'}
  ]);

  await knex('comments').insert([
    {commentary: 'One of my best work', photos_id: 1, users_id: 1}
  ]);

  await knex('photos').insert([
    {url: '(url link)'}
  ]);

  await knex('likes').insert([
    {likes_id: 1, users_id: 1, photos_id: 1}
  ]);
};














