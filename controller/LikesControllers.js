const Likes = require('../Model/LikeModel.js')

const getAllLikes = async (req, res) => {
  const likes = await Likes.totalLikes();
  res.status(200).send(likes);
};


const getLikes = async (req, res) => {
  const getLike = req.id
  const like = await Likes.singleLike(getLike);

  if (like) {
    res.status(200).send(like)
  }else{
    res.status(404).send("like not found");
  }

  // const user = await Users.singleUser(userId);

  // if (user) {
  //   res.status(200).send(user);
  // } else {
  //   res.status(404).send("user not found");
  // }
};


module.exports = {
  getAllLikes,
  getLikes
}