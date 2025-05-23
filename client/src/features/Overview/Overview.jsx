import React from "react";
import CashFlow from "../CashFlow/CashFlow";

const Overview = () => {
	return (
		<div className="col-span-5 row-span-2 grid grid-cols-3 gap-4">
			<CashFlow type={"Cash Flow"} />
			<CashFlow type={"Income"} />
			<CashFlow type={"Expenses"} />
		</div>
	);
};

export default Overview;
