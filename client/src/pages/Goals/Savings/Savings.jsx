import SavingCard from "./SavingCard";
import { useContext, useEffect, useState } from "react";
import { getTransactionsByPeriod } from "../../../helpers/dates";
import { AppContext } from "../../../components/AppContext";

const Savings = () => {
	const [savings, setSavings] = useState([]);
	const [transactionsByMonth, setTransactionsByMonth] = useState([]);
	const userId = localStorage.getItem("userid");
	const { transactions } = useContext(AppContext);

	useEffect(() => {
		// let { periodStartDate, periodEndDate, dateName } =
		// 	getTransactionsByPeriod("month");
		const URL = `http://localhost:3000/api/goals/${userId}`;
		//const transactionURL = `http://localhost:3000/api/transactions/${userId}/${periodStartDate}/${periodEndDate}`;

		async function fetchData() {
			const response = await fetch(URL);
			const data = await response.json();

			setSavings(data);
		}

		fetchData();
	}, []);

	return (
		<section className="sm:mx-auto lg:w-10/12">
			<h1 className="text-text text-4xl my-6">Savings</h1>

			<div className="grid sm:grid-cols-4 gap-6 my-10">
				{savings.map((savingItem) => (
					<SavingCard data={savingItem} transactions={transactions} />
				))}
				<div className="bg-secondary p-4 rounded-lg flex flex-col gap-y-5 justify-center">
					<p className="text-text text-center">
						Take control of your savings and save more money with
						Savings Goals!
					</p>
					<button className="bg-accent text-primary py-3 rounded-md">
						Create a New Savings Goal
					</button>
				</div>
			</div>
		</section>
	);
};

export default Savings;

// const savingsData = [
// 	{
// 		name: "TFSA",
// 		category: "SAVINGS",
// 		budgetAmount: 350,
// 		description: "",
// 	},
// 	{
// 		name: "Bills",
// 		category: ["BILLS"],
// 		budgetAmount: 250,
// 		description: "",
// 	},
// 	{
// 		name: "Emergency Fund",
// 		category: ["SUBSCRIPTION"],
// 		budgetAmount: 150,
// 		description: "",
// 	},
// 	{
// 		name: "FHSA",
// 		category: ["GROCERIES"],
// 		budgetAmount: 150,
// 		description: "",
// 	},
// 	{
// 		name: "Apartment Cost",
// 		category: ["FUN", "FOOD"],
// 		budgetAmount: 350,
// 		description: "",
// 	},
// 	{
// 		name: "Bills",
// 		category: ["BILLS"],
// 		budgetAmount: 250,
// 		description: "",
// 	},
// 	{
// 		name: "Subscription Services",
// 		category: ["SUBSCRIPTION"],
// 		budgetAmount: 150,
// 		description: "",
// 	},
// 	{
// 		name: "Groceries",
// 		category: ["GROCERIES"],
// 		budgetAmount: 150,
// 		description: "",
// 	},
// 	{
// 		name: "Groceries",
// 		category: ["GROCERIES"],
// 		budgetAmount: 150,
// 		description: "",
// 	},
// ];
