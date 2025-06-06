const express = require("express");
const router = express.Router();
const {
getUser,
createUser
} = require("../controllers/authentication.controller.js");

router.get("/:email", getUser);

// router.post("/login", login);

// router.get("/register", register);

router.post("/register", createUser);

module.exports = router;