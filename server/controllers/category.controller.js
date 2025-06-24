const Category  = require("../models/category.model");

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({})
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json( {message: error} )
    }
}

const createCategory = async (req, res) => {
    	try {
		console.log(req.body);

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
