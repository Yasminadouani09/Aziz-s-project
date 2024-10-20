var express = require("express");

const userController = require("../controller/UserController.js");
var router = express.Router();
const auth = require("../middleware/auth.js"); 



router.post("/addUser", userController.addUser);
router.get("/getAllUsers", userController.getAll);
router.get("/deleteUserByID", userController.deleteUserByID);
router.get("/getUserById", userController.getUserById);
router.get("/updateUser", userController.updateUser);

module.exports = router;
