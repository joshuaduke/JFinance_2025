const Transaction = require("../models/transactions.model");

const getTransactions = async (req, res) => {
	try {
		const userId = req.params.id;
		if (req.params.startDate) {
			const startDate = req.params.startDate;
			const endDate = req.params.endDate;
			//need to convert to ISO 8601 since the data I used from my google sheets file uses ISO 8601 date formats
			const transactions = await Transaction.find({
				userID: userId,
				date: {
					$gte: new Date(startDate).toISOString(),
					$lte: new Date(endDate).toISOString(),
				},
			});

			//sort transactions by date from most recent
			let sortedTransactions = transactions.sort(
				(a, b) => new Date(a.date) - new Date(b.date)
			);
			res.status(200).json(sortedTransactions);
		} else {
			// const transactions = await Transaction.find({});
			const transactions = await Transaction.find({ userID: userId });
			let sortedTransactions = transactions.sort(
				(a, b) => new Date(a.date) - new Date(b.date)
			);

			res.status(200).json(sortedTransactions);
		}
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const getTransactionById = async (req, res) => {
	try {
		const { id } = req.params;
		const transaction = await Transaction.findById(id);

		res.status(200).json(transaction);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const createTransaction = async (req, res) => {
	try {
		const transaction = await Transaction.create(req.body);
		res.status(200).json(transaction);
	} catch (error) {
		// 500 - server error
		res.status(500).json({ message: error });
	}
};

const updateTransaction = async (req, res) => {
	try {
		const { id } = req.params;

		// find transaction and update the body
		const transaction = await Transaction.findByIdAndUpdate(id, req.body);
		if (!transaction) {
			return res.status(404).json({ message: "Transaction not found" });
		}

		const updatedTransaction = await Transaction.findById(id);
		res.status(200).json(updatedTransaction);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const deleteTransaction = async (req, res) => {
	try {
		const { id } = req.params;

		// find transaction and delete the body
		const transaction = await Transaction.findByIdAndDelete(id);
		if (!transaction) {
			return res.status(404).json({ message: "Transaction not found" });
		}
		res.status(200).json(transaction);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

module.exports = {
	getTransactions,
	getTransactionById,
	createTransaction,
	updateTransaction,
	deleteTransaction,
};
