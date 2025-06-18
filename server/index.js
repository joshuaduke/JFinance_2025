require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const User = require("./models/users.model.js");
const transactionRoute = require("./routes/transaction.route.js");
const goalRoute = require("./routes/goal.route.js");
const budgetRoute = require("./routes/budget.route.js");
const authenticationRoute = require("./routes/authentication.route.js");
const accountRoute = require("./routes/account.route.js");
const LocalStrategy = require("passport-local");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const passport = require("passport");
const app = express();
const PORT = process.env.PORT || 3000;

//middleware to parse body to json
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
	session({
		secret: "your-secret-key", // Replace with a strong secret key
		resave: false,
		saveUninitialized: true,
		// store: MongoStore.create({
		// 	mongoUrl: `mongodb+srv://admin:${process.env.NODE_MONGODB_PASS}@jfinancedb.7dcdqs7.mongodb.net/Transactions?retryWrites=true&w=majority&appName=jFinanceDB`,
		// }),
	})
);

//routes
app.use("/api/transactions", transactionRoute);
app.use("/api/goals", goalRoute);
app.use("/api/budgets", budgetRoute);
app.use("/api/auth", authenticationRoute);
app.use("/api/accounts", accountRoute);

//passport js
/*
passport.initialize() and passport.session() are invoked on each request and they are the ones that cause serializeUser to load the user id to req.user if a serialized user is found in the server (when using mongodb, if the user exist in mongodb).
*/
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get("/", (req, res) => {
// 	res.send("Hello World!");
// });

mongoose
	.connect(
		`mongodb+srv://admin:${process.env.NODE_MONGODB_PASS}@jfinancedb.7dcdqs7.mongodb.net/Transactions?retryWrites=true&w=majority&appName=jFinanceDB`
	)
	.then(() => {
		console.log("Connected to Database");
		app.listen(PORT, "0.0.0.0", () => {
			console.log(`Example app listening on port ${PORT}`);
		});
	})
	.catch(() => {
		console.log("connection failed");
	});
