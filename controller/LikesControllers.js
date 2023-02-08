const Likes = require('../Model/LikeModel.js')

const getAllLikes = async (req, res) => {
  const likes = await Likes.totalLikes();
  res.status(200).send(likes);
};


const getLikes = async (req, res) => {
  const like = await Likes.singleLike(req.body.id);
  res.status(200).send(like); 
};


module.exports = {
  getAllLikes,
  getLikes
}