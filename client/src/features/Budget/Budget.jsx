import React, { useEffect, useState } from "react";
import BudgetItem from "./BudgetItem";
import { getTransactionsByPeriod } from "../../helpers/dates";

const Budget = () => {
	const [budgets, setBudgets] = useState([]);
	const [transactionsByMonth, setTransactionsByMonth] = useState([]);
	const userId = localStorage.getItem("userid");
	// useEffect(() => {
	// 	const URL = "http://localhost:3000/api/budgets";
	// 	const response = fetch(URL)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			//console.log("Response", data);
	// 			setBudgets(data);
	// 		});
	// }, []);

	useEffect(() => {
		let { periodStartDate, periodEndDate, dateName } =
			getTransactionsByPeriod("month");
		const URL = `http://localhost:3000/api/budgets/${userId}`;
		const transactionURL = `http://localhost:3000/api/transactions/${userId}/${periodStartDate}/${periodEndDate}`;

		async function fetchData() {
			const [response1, response2] = await Promise.all([
				fetch(URL),
				fetch(transactionURL),
			]);
			const [data1, data2] = await Promise.all([
				response1.json(),
				response2.json(),
			]);
			console.log("Budget Data", data1);
			console.log("Transactions Data", data2);
			setBudgets(data1);
			setTransactionsByMonth(data2);
		}

		fetchData();
	}, []);

	// console.log("Budget Data", budgets);
	// console.log("Transactions Data", transactionsByMonth);

	return (
		<div className="col-span-12 sm:col-span-3 sm:row-span-4 shadow-lg rounded-2xl overflow-auto pt-2 pb-4 px-4 bg-white">
			<h3>My Budget</h3>

			<div
				className="rounded-lg px-2 py-2"
				style={{ backgroundColor: "#e9e9e9" }}
			>
				{" "}
				{budgets.map((data, index) => (
					<BudgetItem
						key={index}
						data={data}
						transactions={transactionsByMonth}
					/>
				))}
			</div>
		</div>
	);
};

export default Budget;

const budgetData = [
	{
		name: "Entertainment and FOOD",
		category: ["FUN", "FOOD"],
		budgetAmount: 350,
		description: "",
		wallets: "",
	},
	{
		name: "Bills",
		category: ["BILLS"],
		budgetAmount: 250,
		description: "",
		wallets: "",
	},
	{
		name: "Subscription Services",
		category: ["SUBSCRIPTION"],
		budgetAmount: 150,
		description: "",
		wallets: "",
	},
	{
		name: "Groceries",
		category: ["GROCERIES"],
		budgetAmount: 150,
		description: "",
		wallets: "",
	},
];
