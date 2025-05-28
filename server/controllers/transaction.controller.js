const Transaction = require("../models/transactions.model");

const getTransactions = async (req, res) => {
	try {
		const transactions = await Transaction.find({});
		res.status(200).json(transactions);
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
		console.log(req.body);

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
