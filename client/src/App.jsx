import { useState, createContext } from "react";
import "./App.css";
import Header from "./features/Header/Header";
import NavMenu from "./features/NavMenu/NavMenu";
import Actions from "./features/Actions/Actions";
import Transactions from "./features/Transactions/Index";
import Expenses from "./features/ExpensesGraph/Expenses";
import Networth from "./features/Networth/Networth";
import Goals from "./features/Goals/Goals";
import { AppContextProvider } from "./components/AppContext";
import Overview from "./features/Overview/Overview";

function App() {
	const [period, setperiod] = useState("month");

	return (
		<AppContextProvider value={{ period, setperiod }}>
			<main className="grid grid-cols-12 grid-rows-12 gap-4 h-screen">
				<Header />
				<NavMenu />
				<Overview />
				<Actions />
				<Transactions />
				<Expenses />
				<Networth />
				<Goals />
			</main>
		</AppContextProvider>
	);
}

export default App;

// Context
