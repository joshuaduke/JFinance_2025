import React from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
	const [period, setPeriod] = useState("all");
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		const URL = "http://localhost:3000/api/transactions";
		const response = fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				console.log("Response", data);
				setTransactions(data);
			});
	}, []);
	console.log("Appcontext triggered");
	const value = { transactions, setTransactions };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
