require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
console.log(process.env);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/api/transactions", (req, res) => {
	res.send("Data Received");
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
		console.log("connection faile");
	});
