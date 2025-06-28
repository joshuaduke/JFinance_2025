import React, { useState } from "react";
import { myIcons } from "../../assets/CategoryIcons";
import TransactionItem from "./TransactionItem";
import { formatTransactionDate } from "../../helpers/dates";
import { format, parseISO } from "date-fns";
import {
	calculateTransactionsByDate,
	formatCurrency,
} from "../../helpers/currency";

const Transaction = ({ date, data }) => {
	let currentTransactionDate = date;
	let transactionData = data;

	const currentTransactions = transactionData.filter(
		(element) => element.date == currentTransactionDate
	);

	let dateCashFlow = calculateTransactionsByDate(currentTransactions);

	return (
		<div className="border-b-18 border-primary">
			<div className="text-accent flex justify-between py-1 px-2">
				{/* <p>{currentTransactionDate}</p> */}
				<p>{formatTransactionDate(currentTransactionDate)}</p>
				<p>{formatCurrency(dateCashFlow)}</p>
			</div>
			<TransactionItem data={currentTransactions} />
		</div>
	);
};

export default Transaction;
