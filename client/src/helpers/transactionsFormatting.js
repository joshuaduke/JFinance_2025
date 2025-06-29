

//once you have an array of all categories
//loop through category array and for each index, filter transactions array to find all matching categories

import { formatTransactionDate } from "./dates";

// reduce method to calculate each  sum
//store in a object "category": cat, "totalSum"

export function getCategorySums(transactionData){
	let arrOfSums = [];

	//remove salary transactions
	let data = transactionData.filter((item) => {
		if (item.category != "PAYMENT" && item.category != "N/A") {
			return item;
		}
	});

	// store all available category names in an array,
	let categoryArray = data.map((value) => value.category);

	// remove duplicates
	let cleanCategoryArr = categoryArray.filter(
		(item, index) => categoryArray.indexOf(item) === index
	);

	//for each category find the the transactions that belong to it and store in the filteredData array
	// then use reduce method to calciulate the sum of all transactions of that category and push obj into arrOfSums
	cleanCategoryArr.forEach((category) => {
		let filteredData = data.filter(
			(item, index) => category == item.category
		);

		let sum = filteredData.reduce((acc, curr) => acc + curr.cost, 0) * -1;
		arrOfSums.push({ category: category, totalSum: sum });
	});

	return arrOfSums;
}

export function getDateSums(transactionData){
	let arrOfSums = [];

	// store all available dates in an array,
	let dateArray = transactionData.map((value) => value.date);

	// remove duplicates
	let cleanDateArray = dateArray.filter(
		(item, index) => dateArray.indexOf(item) === index
	);

	//for each category find the the transactions that belong to it and store in the filteredData array
	// then use reduce method to calciulate the sum of all transactions of that category and push obj into arrOfSums
	cleanDateArray.forEach((date) => {
		let filteredData = transactionData.filter(
			(item, index) => date == item.date
		);

		let sum = filteredData.reduce((acc, curr) => acc + curr.cost, 0);
		arrOfSums.push({ date: formatTransactionDate(date), totalSum: sum });
	});

	return arrOfSums;
}