import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../components/AppContext";
import { formatCurrency } from "../../helpers/currency";
import { getTransactionsByPeriod } from "../../helpers/dates";
import { getMonth, format, parse, startOfMonth, endOfMonth } from "date-fns";

const CashFlow = ({ type }) => {
	const { period, setPeriod } = useContext(AppContext);
	let bkColor = "";
	let bdColor = "";
	const [periodData, setperiodData] = useState(
		getTransactionsByPeriod(period)
	);
	// const [cashFlowAmount, setcashFlowAmount] = useState(0);

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

	let cashflowAmount = calculateCashFlow(periodData);

	const handleChange = (event) => {
		setPeriod(event.target.value);
		console.log("new Period", period);
		setperiodData(getTransactionsByPeriod(period));
	};

	return (
		<div
			className="border-1 rounded-lg flex flex-col justify-between shadow-lg"
			style={{ backgroundColor: bkColor, borderColor: bkColor }}
		>
			{/* <div>
				<label htmlFor="period-select">Period</label>
				<select
					name="periods"
					id="period-select"
					value={period}
					onChange={handleChange}
				>
					<option value="week">Week</option>
					<option value="month">Month</option>
					<option value="year">Year</option>
					<option value="all">All</option>
				</select>
			</div> */}
			<div
				className="rounded-lg py-4 px-2"
				style={{
					backgroundColor: bdColor,
				}}
			>
				<p>{type}</p>
				{/* If period is not 'all' calculate percentage difference from last month/year/week */}
			</div>
			<div className="py-4 px-2">
				<h3 className="font-extrabold">
					{formatCurrency(cashflowAmount)}
				</h3>
				<p className="text-xs font-thin">+4% from last month </p>
			</div>
		</div>
	);
};

export default CashFlow;
