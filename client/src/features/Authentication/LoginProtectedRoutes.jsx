import React from 'react'
import { Navigate } from 'react-router';

const LoginProtectedRoutes = ({children, isAuthenticated}) => {
        if(isAuthenticated == true) {
        return <Navigate to="/"/>
    } 
    return children;

}

export default LoginProtectedRoutes