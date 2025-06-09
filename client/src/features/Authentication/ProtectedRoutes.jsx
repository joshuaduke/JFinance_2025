import React from 'react'
import { Navigate } from 'react-router';

const ProtectedRoutes = ( {children, isAuthenticated} ) => {
    if(isAuthenticated == false) {
        return <Navigate to="/login"/>
    } 
    return children;
}

export default ProtectedRoutes