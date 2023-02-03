const Likes = require('../Model/LikeModel.js')

const getAllLikes = async (req, res) => {
  const likes = await Likes.totalPost();
  res.status(200).send(likes);
};


const getLikes = async (req, res) => {
  const like = await Likes.singlePost(req.body.id);
  res.status(200).send(like); 
};


module.exports = {
  getAllLikes,
  getLikes
}