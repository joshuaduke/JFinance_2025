import React, { useEffect, useState } from "react";
import BudgetItem from "./BudgetItem";
import { getTransactionsByPeriod } from "../../helpers/dates";
const apiUrl = import.meta.env.VITE_APP_API_URL;

const Budget = () => {
	const [budgets, setBudgets] = useState([]);
	const [transactionsByMonth, setTransactionsByMonth] = useState([]);
	const userId = localStorage.getItem("userid");

	useEffect(() => {
		let { periodStartDate, periodEndDate, dateName } =
			getTransactionsByPeriod("month");
		const URL = `${apiUrl}/api/budgets/${userId}`;
		const transactionURL = `${apiUrl}/api/transactions/${userId}/${periodStartDate}/${periodEndDate}`;

		async function fetchData() {
			const [response1, response2] = await Promise.all([
				fetch(URL),
				fetch(transactionURL),
			]);
			const [data1, data2] = await Promise.all([
				response1.json(),
				response2.json(),
			]);

			setBudgets(data1);
			setTransactionsByMonth(data2);
		}

		fetchData();
	}, []);

	return (
		<div className="col-span-12 sm:col-span-3 sm:row-span-6 shadow-lg rounded-2xl overflow-auto pb-4 bg-white">
			<h3 className="text-2xl text-text pb-4">My Budget</h3>

			<div className="bg-secondary rounded-lg px-2 py-2 ">
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

// const budgetData = [
// 	{
// 		name: "Entertainment and FOOD",
// 		category: ["FUN", "FOOD"],
// 		budgetAmount: 350,
// 		description: "",
// 		wallets: "",
// 	},
// 	{
// 		name: "Bills",
// 		category: ["BILLS"],
// 		budgetAmount: 250,
// 		description: "",
// 		wallets: "",
// 	},
// 	{
// 		name: "Subscription Services",
// 		category: ["SUBSCRIPTION"],
// 		budgetAmount: 150,
// 		description: "",
// 		wallets: "",
// 	},
// 	{
// 		name: "Groceries",
// 		category: ["GROCERIES"],
// 		budgetAmount: 150,
// 		description: "",
// 		wallets: "",
// 	},
// ];
