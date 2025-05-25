import React from "react";
import BudgetItem from "./BudgetItem";

const Budget = () => {
	return (
		<div className="col-span-3 row-span-3 shadow-lg rounded-2xl overflow-auto pt-2 pb-4 px-4 bg-white">
			<h3>My Budget</h3>

			<div
				className="rounded-lg px-2 py-2"
				style={{ backgroundColor: "#e9e9e9" }}
			>
				{" "}
				{budgetData.map((data) => (
					<BudgetItem data={data} />
				))}
			</div>
		</div>
	);
};

export default Budget;

const budgetData = [
	{
		budgetName: "Entertainment",
		category: "FUN",
		budgetAmount: 200,
		description: "",
		wallets: "",
	},
	{
		budgetName: "Bills",
		category: "BILLS",
		budgetAmount: 250,
		description: "",
		wallets: "",
	},
	{
		budgetName: "Food and Dining out",
		category: "FOOD",
		budgetAmount: 150,
		description: "",
		wallets: "",
	},
	{
		budgetName: "Groceries",
		category: "GROCERIES",
		budgetAmount: 150,
		description: "",
		wallets: "",
	},
];
