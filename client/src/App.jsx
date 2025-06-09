import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
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
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoutes from "./features/Authentication/ProtectedRoutes";
import LoginProtectedRoutes from "./features/Authentication/LoginProtectedRoutes";

function App() {
	const [period, setperiod] = useState("month");
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	console.log("Authenticated?", isAuthenticated);

	useEffect(() => {
		console.log("Useeffect triggered");

		const authenticateUser = async () => {
			console.log("Authenticate user triggered");

			const response = await fetch(
				"http://localhost:3000/api/auth/profile",
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${localStorage.getItem(
							"token"
						)}`,
					},
				}
			);
			const data = await response.json();
			// localStorage.setItem("token", data.token);
			console.log("Response", data);
			console.log("Response", data.email);
			if (response.status != 401) {
				setIsAuthenticated(true);
			}
		};

		authenticateUser();
	}, []);
	// useEffect(() => {
	// 	if (localStorage.getItem("token") != "") {
	// 		setIsAuthenticated(true);
	// 	}
	// }, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={
						<LoginProtectedRoutes isAuthenticated={isAuthenticated}>
							<SignIn setIsAuthenticated={setIsAuthenticated} />
						</LoginProtectedRoutes>
					}
				/>
				<Route
					path="/register"
					element={
						<LoginProtectedRoutes isAuthenticated={isAuthenticated}>
							<Register />
						</LoginProtectedRoutes>
					}
				/>

				<Route
					path="/"
					element={
						<ProtectedRoutes isAuthenticated={isAuthenticated}>
							<Dashboard />
						</ProtectedRoutes>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

// Context
