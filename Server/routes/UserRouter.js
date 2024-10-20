var express = require("express");
var router = express.Router();
const userController = require("../controller/UserController.js");
const auth = require("../middleware/auth.js"); 



router.post("/addUser", userController.addUser);


module.exports = router;
