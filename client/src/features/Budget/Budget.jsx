import React, { useEffect, useState } from "react";
import BudgetItem from "./BudgetItem";

const Budget = () => {
	const [budgets, setBudgets] = useState([]);

	useEffect(() => {
		const URL = "http://localhost:3000/api/budgets";
		const response = fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				console.log("Response", data);
				setBudgets(data);
			});
	}, []);

	return (
		<div className="col-span-3 row-span-3 shadow-lg rounded-2xl overflow-auto pt-2 pb-4 px-4 bg-white">
			<h3>My Budget</h3>

			<div
				className="rounded-lg px-2 py-2"
				style={{ backgroundColor: "#e9e9e9" }}
			>
				{" "}
				{budgets.map((data) => (
					<BudgetItem data={data} />
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
