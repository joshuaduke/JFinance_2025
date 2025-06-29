const Budget = require("../models/budgets.model");

const getBudgets = async (req, res) => {
	try {
		const userId = req.params.userid;
		const budgets = await Budget.find({ userID: userId });
		// const budgets = await Budget.find({});
		res.status(200).json(budgets);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const getBudgetById = async (req, res) => {
	try {
		const { id } = req.params;
		const budget = await Budget.findById(id);

		res.status(200).json(budget);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const createBudget = async (req, res) => {
	try {
		const budget = await Budget.create(req.body);
		res.status(200).json(budget);
	} catch (error) {
		// 500 - server error
		res.status(500).json({ message: error });
	}
};

const updateBudget = async (req, res) => {
	try {
		const { id } = req.params;

		// find budget and update the body
		const budget = await Budget.findByIdAndUpdate(id, req.body);
		if (!budget) {
			return res
				.status(404)
				.json({ message: "Budget not found, could not be updated" });
		}

		const updatedbudget = await Budget.findById(id);
		res.status(200).json(updatedbudget);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const deleteBudget = async (req, res) => {
	try {
		const { id } = req.params;

		// find budget and delete the body
		const budget = await Budget.findByIdAndDelete(id);
		if (!budget) {
			return res
				.status(404)
				.json({ message: "Budget not found, could not be deleted" });
		}
		res.status(200).json(budget);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

module.exports = {
	getBudgets,
	getBudgetById,
	createBudget,
	updateBudget,
	deleteBudget,
};
