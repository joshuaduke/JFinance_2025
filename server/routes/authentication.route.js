const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
getUser,
createUser,
login,
logout,
authenticateUser,
} = require("../controllers/authentication.controller.js");
const verifyToken = require("../middleware/authMiddleware.js");

router.get("/profile", verifyToken, authenticateUser);

router.get("/user/:userId", getUser);

router.post("/login", login);
// router.post("/login", passport.authenticate('local'), login);

// router.get("/register", register);

router.post("logout", logout);

router.post("/register", createUser);

module.exports = router;