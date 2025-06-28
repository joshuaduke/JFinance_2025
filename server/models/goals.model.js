const mongoose = require("mongoose");

const GoalSchema = mongoose.Schema(
	{
		userID: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			require: [true, "Please enter a Goal name"],
		},
		description: {
			type: String,
		},
		icon: {
			type: String,
		},
		dueDate: {
			type: Date,
		},
		startDate: {
			type: Date,
			default: Date.now,
			require: true,
		},
		completedDate: {
			type: Date,
		},
		startingAmount: {
			default: 0,
			type: Number,
		},
		goalAmount: {
			type: Number,
			require: [true, "Please enter a Goal amount"],
		},
		subCategory: {
			type: [String],
			require: true,
		},
	},
	{ timestamps: true }
);

const Goal = mongoose.model("Goal", GoalSchema);

module.exports = Goal;
