const jwt = require("jsonwebtoken");
const crypto = require('crypto');
 const jwtSecret = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
	const authHeader = req.header("Authorization");
	// const authHeader = req.headers.authorization;
	if (authHeader && authHeader.startsWith("Bearer ")) {
		token = authHeader.split(" ")[1];
	} else {
		token = null;
	}

	if (!token) return res.status(401).json({ error: "Access denied" });
	try {
		const decoded = jwt.verify(token, jwtSecret);
		req.userId = decoded.id;
		req.email = decoded.email;
		req.firstName = decoded.firstName;
		req.lastName = decoded.lastName;
		next();
	} catch (error) {
		res.status(401).json({ error: "Invalid token" });
	}
}

module.exports = verifyToken;
