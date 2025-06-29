import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./features/Authentication/Register";
import SignIn from "./features/Authentication/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoutes from "./features/Authentication/ProtectedRoutes";
import LoginProtectedRoutes from "./features/Authentication/LoginProtectedRoutes";
import { useContext } from "react";
import { AppContext } from "./components/AppContext";
import Goals from "./pages/Goals/Goals";
import Accounts from "./pages/Accounts/Accounts";
import Transactions from "./pages/Transactions/Transactions";
import Settings from "./pages/Settings/Settings";

function App() {
	const [period, setperiod] = useState("month");
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userId, setUserId] = useState("");
	let { authUserId, authSetUserId } = useContext(AppContext);

	useEffect(() => {
		const authenticateUser = async () => {
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

			if (response.status != 401) {
				setIsAuthenticated(true);
				authSetUserId(localStorage.getItem("userid"));
			}
		};
		authenticateUser();
	}, [userId]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={
						<LoginProtectedRoutes isAuthenticated={isAuthenticated}>
							<SignIn
								setIsAuthenticated={setIsAuthenticated}
								setUserId={setUserId}
							/>
						</LoginProtectedRoutes>
					}
				/>
				<Route
					path="/register"
					element={
						<LoginProtectedRoutes isAuthenticated={isAuthenticated}>
							<Register setIsAuthenticated={setIsAuthenticated} />
						</LoginProtectedRoutes>
					}
				/>

				<Route
					element={
						<ProtectedRoutes isAuthenticated={isAuthenticated} />
					}
				>
					<Route path="/" element={<Dashboard />} />
					<Route path="/goals" element={<Goals />} />
					<Route path="/accounts" element={<Accounts />} />
					<Route path="/expenses" element={<Transactions />} />
					<Route path="/accounts" element={<Accounts />} />
					<Route path="/settings" element={<Settings />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

// Context
