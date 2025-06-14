import React from 'react'
import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = ({ isAuthenticated }) => {
	if (isAuthenticated == false) {
		return <Navigate to="/login" />;
	}
	return <Outlet />;
};

export default ProtectedRoutes