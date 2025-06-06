const User = require("../models/users.model");
const passport = require("passport");
const LocalStrategy = require("passport-local");

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const getUser = async (req, res) => {
	try {
		const username = req.params.email;
		const user = await User.findOne({ username: username });
		if (user) {
			console.log("User found:", user.username);
			res.status(200).json(user);
			//   return user;
		} else {
			console.log("User not found.");
			return null;
		}
	} catch (error) {
		// 500 - server error
		res.status(500).json({ message: "Error finding user", error });
	}
};

const createUser = async (req, res) => {
	try {
		console.log(req.body);

		const newUser = new User({
			// username: req.body.username,
			username: req.body.email,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
		}); // You can add other fields here

		User.register(newUser, req.body.password, (err, user) => {
			if (err) {
				console.error(err);
				// Handle registration error (e.g., username already exists)
				return res.status(500).json({ message: error });
			}
			// User registered successfully

			// You might want to log the user in automatically after registration
			passport.authenticate("local")(req, res, () => {
				// res.status(200).json(user);
				res.redirect("/"); // Or send a success response
			});
		});

		// const user = await User.create(req.body);
		//res.status(200).json(user);
	} catch (error) {
		// 500 - server error
		res.status(500).json({ message: error });
	}
};

module.exports = {
	createUser,
	getUser,
};
