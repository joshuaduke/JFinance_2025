const mongoose = require("mongoose");

const BudgetSchema = mongoose.Schema(
	{
		userID: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			require: [true, "Please enter a Budget name"],
		},
		description: {
			type: String,
		},
		budgetAmount: {
			type: Number,
			require: [true, "Please enter a Budget amount"],
		},
		category: {
			type: [String],
			require: true,
		},
	},
	{ timestamps: true }
);

const Budget = mongoose.model("Budget", BudgetSchema);

module.exports = Budget;
