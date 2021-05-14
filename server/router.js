const router = require("express").Router();

// import controllers
const authController = require("./controllers/authentication");

router.post("/authUser", authController.authenticateUser);

module.exports = router;
