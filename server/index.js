require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Transaction = require("./models/transactions.model.js");
const transactionRoute = require("./routes/transaction.route.js");
const app = express();
const port = 3000;

//middleware to parse body to json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/transactions", transactionRoute);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

mongoose
	.connect(
		`mongodb+srv://admin:${process.env.NODE_MONGODB_PASS}@jfinancedb.7dcdqs7.mongodb.net/Transactions?retryWrites=true&w=majority&appName=jFinanceDB`
	)
	.then(() => {
		console.log("Connected to Database");
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		});
	})
	.catch(() => {
		console.log("connection failed");
	});
