const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
	{
		userID: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: [true, "Please enter transaction name"],
		},
		description: {
			type: String,
		},
		category: {
			type: String,
			require: true,
		},
		subCategory: {
			type: String,
			require: true,
		},
		cost: {
			type: Number,
			require: true,
			default: 0,
		},
		importance: {
			type: String,
		},
		account: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			default: Date.now,
			required: true,
		},
	},
	{ timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
