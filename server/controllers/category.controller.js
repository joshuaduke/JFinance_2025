const Category  = require("../models/category.model");

const getCategories = async (req, res) => {
    try {
        const accountID = req.params.userid;

		const categories = await Category.find({
			userID: accountID,
		});
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json( {message: error} )
    }
}

const createCategory = async (req, res) => {
    	try {
		

		const category = await Category.create(req.body);
		res.status(200).json(category);
	} catch (error) {
		// 500 - server error
		res.status(500).json({ message: error });
	}
}

module.exports  = {
    getCategories,
    createCategory
}
