const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: [true, "Please enter account name"],
        },
        bank: {
            type: String,
        },
        description: {
            type: String,
        },
        initialBalance: {
            type: Number,
            require: true,
            default: 0,
        }
    },
    { timestamps: true }
);

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
