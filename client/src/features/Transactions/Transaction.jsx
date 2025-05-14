import React, { useState } from "react";
import { myIcons } from "../../assets/CategoryIcons";
import TransactionItem from "./TransactionItem";

const Transaction = ({ date, data }) => {
	let currentTransactionDate = date;
	let transactionData = data;

	const currentTransactions = transactionData.filter(
		(element) => element.DATE == currentTransactionDate
	);

	return (
		<div className="">
			<div className="flex justify-between bg-amber-300 border border-b-2">
				<p>{currentTransactionDate}</p>
				<p>$1000</p>
			</div>
			<TransactionItem data={currentTransactions} />
		</div>
	);
};

export default Transaction;
