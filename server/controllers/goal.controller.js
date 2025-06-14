const Goal = require("../models/goals.model");

const getGoals = async (req, res) => {
	try {
		const { userid } = req.params;
		const goals = await Goal.find({ userID : userid});
		res.status(200).json(goals);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const getGoalById = async (req, res) => {
	try {
		const { id } = req.params;
		const goal = await Goal.findById(id);

		res.status(200).json(goal);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const createGoal = async (req, res) => {
	try {
		console.log(req.body);

		const goal = await Goal.create(req.body);
		res.status(200).json(goal);
	} catch (error) {
		// 500 - server error
		res.status(500).json({ message: error });
	}
};

const updateGoal = async (req, res) => {
	try {
		const { id } = req.params;

		// find goal and update the body
		const goal = await Goal.findByIdAndUpdate(id, req.body);
		if (!goal) {
			return res
				.status(404)
				.json({ message: "Goal not found, could not be updated" });
		}

		const updatedgoal = await Goal.findById(id);
		res.status(200).json(updatedgoal);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const deleteGoal = async (req, res) => {
	try {
		const { id } = req.params;

		// find goal and delete the body
		const goal = await Goal.findByIdAndDelete(id);
		if (!goal) {
			return res
				.status(404)
				.json({ message: "Goal not found, could not be deleted" });
		}
		res.status(200).json(goal);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

module.exports = {
	getGoals,
	getGoalById,
	createGoal,
	updateGoal,
	deleteGoal,
};
