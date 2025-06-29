import BudgetCard from "./BudgetCard";
import { useEffect, useState } from "react";
import { getTransactionsByPeriod } from "../../../helpers/dates";


const Budgets = () => {
	const [budgets, setBudgets] = useState([]);
	const [transactionsByMonth, setTransactionsByMonth] = useState([]);
	const userId = localStorage.getItem("userid");

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
			setBudgets(data1);
			setTransactionsByMonth(data2);
		}

		fetchData();
	}, []);

	return (
		<section className="sm:mx-auto lg:w-10/12">
			<h3 className="text-text text-4xl my-6">Budgets</h3>

			<div className="grid sm:grid-cols-4 gap-6 my-10">
				{budgetsData.map((budgetItem) => (
					<BudgetCard
						data={budgetItem}
						transactions={transactionsByMonth}
					/>
				))}
				<div className="bg-secondary p-4 rounded-lg flex flex-col gap-y-5 justify-center">
					<p className="text-text text-center">
						Take control of your expenses and save more money with
						budgets!
					</p>
					<button className="bg-accent text-primary py-3 rounded-md">
						Create a New Budget
					</button>
				</div>
			</div>
		</section>
	);
};

export default Budgets;

const budgetsData = [
	{
		name: "Entertainment and FOOD",
		category: ["FUN", "FOOD"],
		budgetAmount: 350,
		description: "",
	},
	{
		name: "Bills",
		category: ["BILLS"],
		budgetAmount: 250,
		description: "",
	},
	{
		name: "Subscription Services",
		category: ["SUBSCRIPTION"],
		budgetAmount: 150,
		description: "",
	},
	{
		name: "Groceries",
		category: ["GROCERIES"],
		budgetAmount: 150,
		description: "",
	},
		{
		name: "Entertainment and FOOD",
		category: ["FUN", "FOOD"],
		budgetAmount: 350,
		description: "",
	},
	{
		name: "Bills",
		category: ["BILLS"],
		budgetAmount: 250,
		description: "",
	},
	{
		name: "Subscription Services",
		category: ["SUBSCRIPTION"],
		budgetAmount: 150,
		description: "",
	},
	{
		name: "Groceries",
		category: ["GROCERIES"],
		budgetAmount: 150,
		description: "",
	},
		{
		name: "Groceries",
		category: ["GROCERIES"],
		budgetAmount: 150,
		description: "",
	},
];
