import React from "react";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
	const [period, setPeriod] = useState("all");
	console.log("Appcontext triggered");
	const value = { period, setPeriod };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
