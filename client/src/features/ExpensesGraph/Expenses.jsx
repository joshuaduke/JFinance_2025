import React, { useState, useEffect } from "react";
import { AppContext } from "../../components/AppContext";
import { useContext } from "react";
import ExpenseBarChart from "./ExpenseBarChart";
import Period from "../../components/Period";
import { getNextPeriod, getPreviousPeriod } from "../../helpers/dates";
import { parseISO } from "date-fns";

const Expenses = () => {
	let {
		transactions,
		setTransactions,
		period,
		periodDateName,
		startDate,
		setStartDate,
		endDate,
		setEndDate,
	} = useContext(AppContext);

	function handlePeriodClick(event) {
		if (event.currentTarget.getAttribute("id") === "previousPeriod") {
			const previousPeriodObj = getPreviousPeriod(
				period,
				startDate,
				endDate
			);

			setStartDate(previousPeriodObj.newStart);
			setEndDate(previousPeriodObj.newEnd);
		} else if (event.currentTarget.getAttribute("id") == "nextPeriod") {
			const nextPeriodObj = getNextPeriod(period, startDate, endDate);
			setStartDate(nextPeriodObj.newStart);
			setEndDate(nextPeriodObj.newEnd);
		}
	}

	return (
		<div className="bg-secondary shadow-md shadow-black col-span-12 sm:col-span-7 sm:row-span-5 p-2 rounded-2xl ">
			<Period />

			{period != "all" && (
				<div className="text-center flex justify-center py-4">
					<button
						className="cursor-pointer
"
						onClick={handlePeriodClick}
						id="previousPeriod"
					>
						<svg
							width="16px"
							height="16px"
							className="place-self-center fill-accent"
							viewBox="0 0 16 16"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								strokeLinecap="round"
								strokeLinejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								<path d="M8 10L8 14L6 14L-2.62268e-07 8L6 2L8 2L8 6L16 6L16 10L8 10Z"></path>
							</g>
						</svg>
					</button>
					<h3 className="text-text inline mx-4">{periodDateName}</h3>
					<button
						className="cursor-pointer"
						onClick={handlePeriodClick}
						id="nextPeriod"
					>
						<svg
							width="16px"
							height="16px"
							className="place-self-center fill-accent"
							viewBox="0 0 16 16"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								strokeLinecap="round"
								strokeLinejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								{" "}
								<path d="M8 6L8 2L10 2L16 8L10 14L8 14L8 10L-1.74845e-07 10L-3.01991e-07 6L8 6Z"></path>{" "}
							</g>
						</svg>
					</button>
				</div>
			)}

			{period == "all" && (
				<div className="text-center py-4">
					<h3 className="text-text inline mx-4">{periodDateName}</h3>
				</div>
			)}

			{transactions ? (
				<ExpenseBarChart transactions={transactions} />
			) : (
				"Data is Loading"
			)}
		</div>
	);
};

export default Expenses;
