import React from "react";
import CashFlow from "../CashFlow/CashFlow";

const Overview = () => {
	return (
		<div className="col-span-12  grid grid-cols-3 gap-2 sm:col-span-5 sm:row-span-2">
			<CashFlow type={"Cash Flow"} />
			<CashFlow type={"Income"} />
			<CashFlow type={"Expenses"} />
		</div>
	);
};

export default Overview;
