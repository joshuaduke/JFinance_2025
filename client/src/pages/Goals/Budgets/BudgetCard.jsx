import React from "react";
import  ProgressBar  from "../../../components/ProgressBar";
import { formatCurrency } from "../../../helpers/currency";

const BudgetCard = ({ data, transactions }) => {
	// const { transactions, setTransactions } = useContext(AppContext);
	let percentage = 0;
	// store subcategory type
	// filter transactions for that type and store in new arr

	let arrSubCategoryItems = transactions.filter(
		(item) => data.category.indexOf(item.category) != -1
	);

	// use reduce method to sum all transactions from that type
	// store in variable
	let sumSubCategoryItems = arrSubCategoryItems.reduce(
		(acc, curr) => acc + curr.cost,
		0
	);

	//calculate percentage
	// goal amount / sumOfSubCategoryType
	percentage = (sumSubCategoryItems / data.budgetAmount) * -100;

	return (
		<div className="bg-secondary p-4 rounded-lg flex flex-col gap-y-5 justify-between">
			<div>
				<h2 className="text-text text-xl">{data.name}</h2>
				<ul className="flex gap-1">
					{data.category.map((item) => (
						<li className="text-xs p-1 bg-accent rounded-lg">
							{item}
						</li>
					))}
				</ul>
			</div>
			<div>
				<h3 className="text-text">
					<span className="text-xl text-accent font-bold">
						{formatCurrency(sumSubCategoryItems * -1)}
					</span>{" "}
					left <br /> From {formatCurrency(data.budgetAmount)}
				</h3>
			</div>
			<div>
				<ProgressBar percentage={percentage} />
			</div>
			<div className="text-text flex justify-between opacity-70">
				<span>June 01, 2025</span>
				<span>June 30, 2025</span>
			</div>
		</div>
	);
};

export default BudgetCard;
