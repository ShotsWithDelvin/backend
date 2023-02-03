const express = require("express");
const photoController = require("../controller/PhotoControllers.js");

const router = express.Router();

router.get("/showcase", photoController.getAllPhotos);

router.get("/showcase/:id", photoController.getPhoto);

module.exports = router; 