import React, { useState } from "react";
import CategoryIcon from "../../components/CategoryIcon";
import { formatCurrency } from "../../helpers/currency";
import TransactionItem from "./TransactionItem";

const TransactionsByDate = ({ data, collectionData}) => {

	return data.map((element, index) => (
		//key needs to be changed to ID pulled from DB
		<>
			<TransactionItem data={element} collectionData={collectionData}/>
		</>
	));
};

export default TransactionsByDate;
