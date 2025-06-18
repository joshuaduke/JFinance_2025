const express = require("express");
const router = express.Router();
const {
    createAccount,
    getAccountById,
    getAllAccounts,
    updateAccount,
    deleteAccount
} = require("../controllers/account.controller");


router.get("/", getAllAccounts);

router.get("/:id", getAccountById);

router.post("/", createAccount);

router.put("/:id", updateAccount);

router.delete(":id", deleteAccount);

module.exports = router;