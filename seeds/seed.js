const bcrypt = require("bcrypt");

exports.seed = async function (knex) {
  await knex.raw("TRUNCATE users RESTART IDENTITY CASCADE");
  await knex.raw("TRUNCATE TABLE comments RESTART IDENTITY CASCADE");
  await knex.raw("TRUNCATE TABLE photos RESTART IDENTITY CASCADE");
  await knex.raw("TRUNCATE TABLE likes RESTART IDENTITY CASCADE");

  await knex("users").insert([
    {
      username: "DelvinReyesOfficial",
      name: "Delvin Reyes",
      email: "DelvinReyes.95@Gmail.com",
      password: bcrypt.hashSync("123", 10),
    },
    {
      username: "Dev202",
      name: "Devonte Duncan",
      email: "DevonteDuncan202@Gmail.com",
      password: bcrypt.hashSync("123", 10),
    },
    {
      username: "GavinGG",
      name: "Gavin Giddings",
      email: "GavinGG@Gmail.com",
      password: bcrypt.hashSync("123", 10),
    },
    {
      username: "ShemarGameZilla",
      name: "Shemar Gordon",
      email: "GameZilla@Gmail.com",
      password: bcrypt.hashSync("123", 10),
    },
    {
      username: "WhiteMike",
      name: "Mike Jones",
      email: "WhiteMike@hotmail.com",
      password: bcrypt.hashSync("123", 10),
    },
    {
      username: "SheHulk",
      name: "Jennifer WaltersShe",
      email: "SheHulk@yahoo.com",
      password: bcrypt.hashSync("123", 10),
    },
    {
      username: "Spider-Man",
      name: "Peter Parker",
      email: "FriendlyNeighborhoodSpiderMan@aol.com",
      password: bcrypt.hashSync("123", 10),
    },
    {
      username: "MoonKnight",
      name: "Marc Spector",
      email: "MoonGod@Gmail.com",
      password: bcrypt.hashSync("123", 10),
    },
    {
      username: "MilkMan",
      name: "Johnathon Moore",
      email: "MilkMan@Gmail.com",
      password: bcrypt.hashSync("123", 10),
    },
    {
      username: "TouchMyEars",
      name: "Jason Smith",
      email: "JS@Gmail.com",
      password: bcrypt.hashSync("123", 10),
    },
    {
      username: "AshKash",
      name: "Ashley Wells",
      email: "Wells@yahoo.com",
      password: bcrypt.hashSync("123", 10),
    },
    {
      username: "BatMan",
      name: "Bruce Wayne",
      email: "GothamCity@Gmail.com",
      password: bcrypt.hashSync("123", 10),
    },
  ]);

  await knex("photos").insert([
    { name: "Sirrea", url: "sirrea.JPG" },
    { name: "Sirrea", url: "sirrea3.JPG" },
    { name: "Tessa", url: "tessa.JPG" },
    { name: "Shoniah", url: "shoniah.JPG" },
    { name: "Karina", url: "karina.JPG" },
    { name: "Karen", url: "karen.JPG" },
    { name: "Cassidy", url: "cassidy.JPG" },
    { name: "Rachely", url: "rachely.JPG" },
    { name: "Rachely", url: "rachely2.JPG" },
    { name: "Zianna", url: "zianna.JPG" },
    { name: "Zianna", url: "zianna3.JPG" },
    { name: "Edny", url: "edny.JPG" },
    { name: "Cesar", url: "cesar.JPG" },
    { name: "Nacier", url: "nacier.JPG" },
    { name: "Devonte", url: "devonte.JPG" },
    { name: "Jorden", url: "jorden.JPG" },
    { name: "Eddie", url: "eddie.JPG" },
    { name: "Caston", url: "caston.JPG" },
  ]);

  await knex("comments").insert([
    { commentary: "One of my best work", photos_id: 1, users_id: 1 },
    { commentary: "Wait! 👀 who's that sexy demon? oh wait, it's me 😉", photos_id: 15, users_id: 2 },
    { commentary: "I love this picture. May I have a boxing shoot as well?", photos_id: 3, users_id: 3 },
    { commentary: "Beautiful picture. I hope she didn't get stung by a bee #buzz", photos_id: 4, users_id: 4 },
    { commentary: "Her smile though 😍", photos_id: 5, users_id: 5 },
    { commentary: "THIS IS SOOOO GORGEOUS ❤️", photos_id: 6, users_id: 6 },
    { commentary: "This is really dope. Everybody gets one 🕸", photos_id: 7, users_id: 7 },
    { commentary: "The gods told me this picture is the chosen one ☾", photos_id: 8, users_id: 8 },
    { commentary: "Simple but yet powerful🥛❤️ ", photos_id: 9, users_id: 9 },
    { commentary: "CLEEEEAAAAN!! We have to shoot my guy", photos_id: 10, users_id: 10 },
    { commentary: "Hey, I seen that guy in my coffee shop last week. UHKAYY MODEL🔥", photos_id: 18, users_id: 11 },
    { commentary: "I'm Batman *deep voice* 🦇", photos_id: 18, users_id: 12 },
  ]);

  await knex("likes").insert([{ users_id: 1, photos_id: 1 }]);
};
