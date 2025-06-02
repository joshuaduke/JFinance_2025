import React from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { getTransactionsByPeriod } from "../helpers/dates";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
	const [period, setPeriod] = useState("all");
	const [transactions, setTransactions] = useState([]);
	const [periodDateName, setPeriodDateName] = useState("");

	// function to get current date as an object depending on the period
	/**
	 *
	 * {
	 * 	startDate: first Day of the month
	 * 	endDet: last Day of the month
	 * }
	 *
	 */
	// let startDate = "2025-05-01";
	// let endDate = "2025-05-31";

	useEffect(() => {
		let { startDate, endDate, dateName } = getTransactionsByPeriod(period);
		setPeriodDateName(dateName);
		const URL = `http://localhost:3000/api/transactions/${startDate}/${endDate}`;
		const response = fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				console.log("Api Called");
				// console.log("Response", data);
				setTransactions(data);

				// trigger function get transaction
			});
	}, [period, periodDateName]);
	console.log("Appcontext triggered");
	const value = {
		transactions,
		setTransactions,
		period,
		setPeriod,
		periodDateName,
		setPeriodDateName,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
