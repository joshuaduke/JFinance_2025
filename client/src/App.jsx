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

function App() {
	const [period, setperiod] = useState("month");

	return (
		<AppContextProvider value={{ period, setperiod }}>
			<main className="grid grid-cols-12 grid-rows-12 gap-4 h-screen mx-auto lg:w-full xl:w-10/12 2xl:w-8/12">
				<Header />
				<NavMenu />
				<Overview />
				<Actions />
				<Transactions />
				<Expenses />
				<Budget />
				<Goals />
				{/* <Expenses /> */}
			</main>
		</AppContextProvider>
	);
}

export default App;

// Context
