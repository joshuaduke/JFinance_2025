import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../components/AppContext";
import { formatCurrency } from "../../helpers/currency";
import { getTransactionsByPeriod } from "../../helpers/dates";
import { getMonth, format, parse, startOfMonth, endOfMonth } from "date-fns";

const CashFlow = ({ type }) => {
	const { transactions, setTransactions } = useContext(AppContext);
	let bkColor = "";
	let bdColor = "";

	function calculateCashFlow(data) {
		let result;
		if (type === "Cash Flow") {
			bkColor = "#d1bce0";
			bdColor = "#d096e0";
			result = data.reduce((acc, curr) => acc + curr.cost, 0);
		} else if (type === "Income") {
			bkColor = "#BCE5C5";
			bdColor = "#96e0a2";
			let filteredArr = data.filter((item) => item.cost > 0);
			result = filteredArr.reduce((acc, curr) => acc + curr.cost, 0);
		} else if (type === "Expenses") {
			bkColor = "#e2bcbc";
			bdColor = "#e09696";
			let filteredArr = data.filter((item) => item.cost < 0);
			result = filteredArr.reduce((acc, curr) => acc + curr.cost, 0);
		}

		// setcashFlowAmount(formatCurrency(result));
		return result;
	}

	let cashflowAmount = calculateCashFlow(transactions);

	return (
		<div
			className="shadow-md shadow-black bg-secondary rounded-lg flex flex-col justify-between"
			// style={{ backgroundColor: bkColor, borderColor: bkColor }}
		>
			<div
				className="rounded-lg py-4 px-2"
				// style={{
				// 	backgroundColor: bdColor,
				// }}
			>
				<p className="text-text">{type}</p>
				{/* If period is not 'all' calculate percentage difference from last month/year/week */}
			</div>
			<div className="py-4 px-2">
				<h3 className="font-extrabold" style={{ color: bkColor }}>
					{formatCurrency(cashflowAmount)}
				</h3>
				<p className="text-xs text-text font-thin">
					+4% from last month{" "}
				</p>
			</div>
		</div>
	);
};

export default CashFlow;
