const User = require("../models/users.model");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/authMiddleware");
const jwtSecret = process.env.JWT_SECRET;

const authenticateUser = async (req, res) => {
	try {
		console.log("Authenticating user ", req.firstName);

		res.status(200).json(
			{ 
				message: 'You are authenticated!', 
				user: req.userId, 
				email: req.email,
				firstName: req.firstName,
				lastName: req.lastName 
			});
		//res.status(200).json({ message: "You are authenticated!" });
	} catch (error) {
		res.status(500).json({ message: "Error authenticating user", error });
	}
};


const login = async (req, res) => {
	try {
		passport.authenticate(
			"local",
			{ session: false },
			(err, user, info) => {
				if (err || !user) {
					return res
						.status(401)
						.json({ message: "Authentication failed" });
				}

				// Generate JWT
				const token = jwt.sign(
					{ id: user._id, email: user.username, firstName: user.firstName, lastName: user.lastName },
					jwtSecret,
					{ expiresIn: "1d" }
				);

				res.json({ token, userId: user._id });
			}
		)(req, res);
	} catch (error) {
		// 500 - server error
		res.status(500).json({ message: "Error finding user", error });
	}
};

const logout = async (req, res) => {
	try {
		res.json({ message: "Logged out successfully" });
	} catch (error) {
		// 500 - server error
		res.status(500).json({ message: "Error logging out", error });
	}
};

const createUser = async (req, res) => {
	try {
		console.log(req.body);

		const newUser = new User({
			// username: req.body.username,
			username: req.body.username,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
		}); // You can add other fields here

		User.register(newUser, req.body.password, (err, user) => {
			if (err) {
				console.error(err);
				// Handle registration error (e.g., username already exists)
				return res.status(500).json({ message: err });
			}
			// User registered successfully

			// You might want to log the user in automatically after registration
			passport.authenticate("local")(req, res, () => {
				return res.status(200).json(user);
				//	res.redirect("/"); // Or send a success response
			});
		});

		// const user = await User.create(req.body);
		//res.status(200).json(user);
	} catch (error) {
		// 500 - server error
		res.status(500).json({ message: error });
	}
};

const getUser = async (req, res) => {
	try {
		const userId = req.params.userId;
		console.log("Searching for ID:", userId);
		
		const user = await User.findById(userId);
		if (user) {
			console.log("User found:", user);

			//passport.authenticate("local")(req, res, () => {
			//return res.status(200).json(user)
			//res.redirect("/"); // Or send a success response
			//});
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

module.exports = {
	createUser,
	getUser,
	login,
	logout,
	authenticateUser,
};
