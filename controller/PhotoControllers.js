const Photo = require('../Model/PhotoModel.js')

const getAllPhotos = async (req, res) => {
  const photos = await Photo.totalPhotos();
  res.status(200).send(photos);
};


const getPhoto = async (req, res) => {
  const photo = await Photo.singlePhoto(req.params.id);
  res.status(200).send(photo); 
};


module.exports = {
  getAllPhotos,
  getPhoto
}