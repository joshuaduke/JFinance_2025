const express = require("express");
const router = express.Router();
const {
    getCategories,
    createCategory
} = require("../controllers/category.controller.js");

// router.get("/", getTransactions);
//optional parameters

// router.get("/{:startDate}{/:endDate}", getTransactions);
router.get("/", getCategories);

router.post("/", createCategory);


module.exports = router;
