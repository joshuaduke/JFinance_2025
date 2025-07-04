const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
	userID: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	backgroundColour: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	path: {
		type: String,
		required: true,
	},
	subCategory: {
		type: [String],
		require: true,
	},
});

const Category = mongoose.model("Category", CategorySchema)

module.exports = Category;