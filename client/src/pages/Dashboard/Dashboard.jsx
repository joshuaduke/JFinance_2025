import { useState, createContext } from "react";
import React from "react";
import { AppContextProvider } from "../../components/AppContext";
import Header from "../../features/Header/Header";
import Overview from "../../features/Overview/Overview";
import Actions from "../../features/Actions/Actions";
import Transactions from "../../features/Transactions/Index";
import Expenses from "../../features/ExpensesGraph/Expenses";
import Budget from "../../features/Budget/Budget";
import Goals from "../../features/Goals/Goals";
import FooterNavMenu from "../../features/NavMenu/footerNavMenu";
import Accounts from "../../features/Accounts/Accounts";

const Dashboard = () => {
	const [period, setperiod] = useState("month");
	return (
		<main className="grid gap-4 mb-18 grid-cols-12 sm:mb-0 sm:pb-4 sm:grid-rows-11 sm:h-screen sm:mx-auto lg:w-full xl:w-10/12 2xl:w-8/12">
			<Header />
			<Accounts />
			<Overview />
			<Actions />
			<Budget />
			<Expenses />
			<Goals />
			<Transactions />
			<FooterNavMenu />
		</main>

		// <AppContextProvider value={{ period, setperiod }}>
		// 	<main className="grid gap-4 mb-18 grid-cols-12 sm:mb-0 sm:pb-4 sm:grid-rows-11 sm:h-screen sm:mx-auto lg:w-full xl:w-10/12 2xl:w-8/12">
		//         	<Header />
		// 			<Overview />
		// 			<Actions />
		// 			<Transactions />
		// 			<Expenses />
		// 			<Budget />
		// 			<Goals />
		// 			<FooterNavMenu />
		//     </main>
		// </AppContextProvider>
	);
};

export default Dashboard;
