import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Register from "./features/Authentication/Register";
import SignIn from "./features/Authentication/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoutes from "./features/Authentication/ProtectedRoutes";
import LoginProtectedRoutes from "./features/Authentication/LoginProtectedRoutes";
import { useContext } from "react";
import { AppContext } from "./components/AppContext";

function App() {
	const [period, setperiod] = useState("month");
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userId, setUserId] = useState("");
	let { authUserId, authSetUserId } = useContext(AppContext);

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
				authSetUserId(localStorage.getItem("userid"));
			}
		};
		authenticateUser();
	}, [userId]);

	console.log("User ID ", userId);

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
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

// Context
