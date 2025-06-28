import React from "react";

import CategoryIcon from "../../components/CategoryIcon";
import { formatCurrency } from "../../helpers/currency";

const TransactionItem = ({ data }) => {
	return data.map((element, index) => (
		//key needs to be changed to ID pulled from DB
		<div key={index} className="text-text  py-1 px-2 ">
			<div className="flex justify-between">
				<div className="flex pr-2">
					<CategoryIcon category={element.category} />
					<div className="px-2">
						<p className="text-sm">
							{element.name.substring(0, 15)}
						</p>
						<p className="text-xs self-center">
							{element.account.toLowerCase()}
						</p>
					</div>
				</div>

				<p
					className="self-center"
					// style={{
					// 	color: element.cost < 0 ? "#CC0000" : "#108B10",
					// }}
				>
					{formatCurrency(element.cost)}
				</p>
			</div>
		</div>
	));
};

export default TransactionItem;
