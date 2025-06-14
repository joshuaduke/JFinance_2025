const express = require("express");
const router = express.Router();
const {
	getBudgets,
	getBudgetById,
	createBudget,
	updateBudget,
	deleteBudget,
} = require("../controllers/budget.controller.js");

router.get("/:userid", getBudgets);
// router.get("/", getBudgets);

router.get("/:id", getBudgetById);

router.post("/", createBudget);

router.put("/:id", updateBudget);

router.delete(":id", deleteBudget);

module.exports = router;
