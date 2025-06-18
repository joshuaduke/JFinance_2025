const Account = require("../models/accounts.model");

const createAccount = async (req, res) => {
    try {
        console.log(req.body);
        const account = await Account.create(req.body);
        res.status(200).json(account);
        
    } catch (error) {
        res.status(500).json({message: error})
    }
}

// get one account 
const getAccountById = async (req, res) => {
    try {
        const accountID = req.params.id;
        console.log(accountID);
        const response = await Account.findById( accountID )

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const getAllAccounts = async (req, res) => {
    try {
        const accountID = req.params.id;
        console.log(accountID);
        const response = await Account.find({})

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const updateAccount = async (req, res) => {
    try {
        const { id } = req.params;

		// find account and update the body
		const account = await Account.findByIdAndUpdate(id, req.body);
		if (!account) {
			return res.status(404).json({ message: "Account not found" });
		}

		const updatedAccount = await Account.findById(id);
		res.status(200).json(updatedAccount);
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;

		// find account and delete 
		const account = await Account.findByIdAndDelete(id);
		if (!account) {
			return res.status(404).json({ message: "Account not found" });
		}
		res.status(200).json(account);
    } catch (error) {
        res.status(500).json({message: error})
    }
}




module.exports = {
    createAccount,
    getAccountById,
    getAllAccounts,
    updateAccount,
    deleteAccount
}