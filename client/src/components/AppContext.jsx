import React from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { getTransactionsByPeriod } from "../helpers/dates";
import { endOfMonth, startOfMonth } from "date-fns";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
	const [period, setPeriod] = useState("month");
	const [transactions, setTransactions] = useState([]);
	const [periodDateName, setPeriodDateName] = useState("");
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [authUserId, authSetUserId] = useState(
		localStorage.getItem("userid")
	);
	const [userData, setUserData] = useState(null);

	// this use effect only triggers when dependencies change
	// using 2 use effects to prevent infinite loop that was occuring due to start date change
	useEffect(() => {
		// Prevent effect from running on initial mount when startDate is null
		if (!startDate || !endDate) return;

		const { periodStartDate, periodEndDate, dateName } =
			getTransactionsByPeriod(period, startDate, endDate);
		setPeriodDateName(dateName);

		//need to store start and end date as state variables so that we can change them
		const URL = `http://localhost:3000/api/transactions/${authUserId}/${periodStartDate}/${periodEndDate}`;
		const response = fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				setTransactions(data);
			});
	}, [period, startDate, endDate]);

	useEffect(() => {
		// Initialize dates only once on mount
		const { periodStartDate, periodEndDate, dateName } =
			getTransactionsByPeriod(period);
		setStartDate(periodStartDate);
		setEndDate(periodEndDate);
		setPeriodDateName(dateName);

		//need to store start and end date as state variables so that we can change them
		const URL = `http://localhost:3000/api/transactions/${authUserId}/${periodStartDate}/${periodEndDate}`;
		const response = fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				setTransactions(data);
			});
	}, [authUserId]);

	useEffect(() => {
		// retrieve user data
		const userURL = `http://localhost:3000/api/auth/user/${authUserId}`;
		const userResponse = fetch(userURL)
			.then((userResponse) => userResponse.json())
			.then((data) => {
				setUserData(data);
			});
	}, [authUserId]);

	// useeffect to retrieve data from collections
	// useEffect(() => {
	// 	// retrieve account data
	// 	const userURL = `http://localhost:3000/api/auth/user/${authUserId}`;
	// 	const userResponse = fetch(userURL)
	// 		.then((userResponse) => userResponse.json())
	// 		.then((data) => {
	// 			setUserData(data);
	// 		});
	// }, [])

	const value = {
		transactions,
		setTransactions,
		period,
		setPeriod,
		periodDateName,
		setPeriodDateName,
		startDate,
		setStartDate,
		endDate,
		setEndDate,
		authUserId,
		authSetUserId,
		userData,
		setUserData,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
