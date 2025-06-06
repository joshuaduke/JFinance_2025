import { useState, createContext } from "react";
import "./App.css";
import Header from "./features/Header/Header";
import NavMenu from "./features/NavMenu/NavMenu";
import Actions from "./features/Actions/Actions";
import Transactions from "./features/Transactions/Index";
import Expenses from "./features/ExpensesGraph/Expenses";
import Networth from "./features/Networth/Networth";
import Budget from "./features/Budget/Budget";
import Goals from "./features/Goals/Goals";
import { AppContextProvider } from "./components/AppContext";
import Overview from "./features/Overview/Overview";
import FooterNavMenu from "./features/NavMenu/footerNaVMenu";
import Register from "./features/Authentication/Register";
import SignIn from "./features/Authentication/SignIn";

function App() {
	const [period, setperiod] = useState("month");

	return (
		<Register />
		// <SignIn />
		// <AppContextProvider value={{ period, setperiod }}>

		/*	<main className="grid gap-4 mb-18 grid-cols-12 sm:mb-0 sm:pb-4 sm:grid-rows-11 sm:h-screen sm:mx-auto lg:w-full xl:w-10/12 2xl:w-8/12">
				{/* <main className="grid grid-cols-12 grid-rows-12 gap-4 h-screen mx-auto lg:w-full xl:w-10/12 2xl:w-8/12"> */
		/* <Header />
			<NavMenu />
			<Overview />
			<Actions />
			<Transactions />
			<Expenses />
			<Budget />
			<Goals /> */
		/* <Expenses /> */
		/* <FooterNavMenu /> */
		/* </main> */
		// </AppContextProvider>
	);
}

export default App;

// Context
