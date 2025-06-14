import React, { useContext, useEffect, useState } from "react";
import Transaction from "./Transaction";
import { AppContext } from "../../components/AppContext";

const Transactions = () => {
	// const [data, setdata] = useState(transactionData);
	const [filteredDates, setFilteredDates] = useState([]);
	const { transactions, setTransactions } = useContext(AppContext);
	console.log("Transactions from Context", transactions);
	

	useEffect(() => {
		let dateArray = transactions?.map((value) => value.date);

		//create an array without duplicate dates
		let a1 = dateArray.filter(
			(item, index) => dateArray.indexOf(item) === index
		);

		setFilteredDates(a1.reverse());
	}, [transactions]);

	//When using useContext within useEffect, it's important to consider the dependencies of the effect. If the context value is used within the effect, it should be included in the dependency array to ensure that the effect is re-run whenever the context value changes.

	return (
		<div className="hidden col-span-12 h-[300px] sm:h-full sm:block sm:col-span-3 sm:row-span-11 rounded-l-2xl bg-white shadow-lg overflow-auto">
			{/** Component for transaction day of month */}
			<h3 className="px-4 py-2">Transactions</h3>
			{/* component for transaction */}
			{filteredDates.map((date, index) => (
				<Transaction key={index} date={date} data={transactions} />
			))}
		</div>
	);
};

export default Transactions;
