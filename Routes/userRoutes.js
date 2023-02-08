const express = require("express");
const router = express.Router();
const userController = require("../controller/UserControllers");
const authenticate = require("../auth");


router.get("/", userController.allUsers);
router.post("/login", userController.login);
router.get("/logout", userController.logout);

router.get("/getById", authenticate, userController.getUserById);
router.post("/signup", authenticate, userController.userSignUp);
router.delete("/:id", authenticate, userController.userDelete);
router.put("/", authenticate, userController.userUpdate);

router.all("*", (req, res) => {
  res.send("This user route does not exist");
});

module.exports = router;