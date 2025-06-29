import React from 'react'
import TransactionsByDate from './TransactionsByDate';
import { formatTransactionDate } from '../../helpers/dates';
import { calculateTransactionsByDate, formatCurrency } from '../../helpers/currency';

const TransactionDate = ({ date, data, collectionData }) => {
	let currentTransactionDate = date;
	let transactionData = data;

	const currentTransactions = transactionData.filter(
		(element) => element.date == currentTransactionDate
	);

	let dateCashFlow = calculateTransactionsByDate(currentTransactions);

	return (
		<div className="my-4 bg-secondary  shadow-md shadow-black rounded-md md:rounded-lg">
			<div className="text-accent flex justify-between p-4 ">
				{/* <p>{currentTransactionDate}</p> */}
				<p>{formatTransactionDate(currentTransactionDate)}</p>
				<p className="opacity-60">{formatCurrency(dateCashFlow)}</p>
			</div>

			<TransactionsByDate
				data={currentTransactions}
				collectionData={collectionData}
			/>
		</div>
	);
};


export default TransactionDate