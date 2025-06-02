import React, { useState, useEffect } from "react";
import { AppContext } from "../../components/AppContext";
import { useContext } from "react";
import ExpenseBarChart from "./ExpenseBarChart";
import Period from "../../components/Period";

const url = "http://localhost:3000/api/transactions";

const Expenses = () => {
	let { transactions, setTransactions, periodDateName } =
		useContext(AppContext);

	return (
		<div className="col-span-7 row-span-5 bg-white border-1 border-gray-300 px-2 rounded-2xl ">
			<Period />
			<div>
				<h3>{periodDateName}</h3>
			</div>
			{transactions ? (
				<ExpenseBarChart transactions={transactions} />
			) : (
				"Data is Loading"
			)}
		</div>
	);
};

export default Expenses;
