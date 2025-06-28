import React from "react";
import { useContext } from "react";
import { AppContext } from "../../components/AppContext";
import { formatCurrency } from "../../helpers/currency";


const AccountCard = ( { data} ) => {
    const {transactions} = useContext(AppContext);

    const filteredTransactions = transactions.filter((item) => item.account === data.name)
    const accountBalance = filteredTransactions.reduce((acc, curr) => acc + curr.cost, data.initialBalance)
    console.log("accountBalance", accountBalance);
    

	return (
		<div className="bg-secondary text-text p-2 rounded shadow-md ">
			<p>{data.name}</p>
			<p className="text-xs">{data.bank}</p>
			<p className="text-2xl text-accent">{formatCurrency(accountBalance)}</p>
		</div>
	);
};

export default AccountCard;
