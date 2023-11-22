import React from 'react'
import { useAuth } from './context/Authcontext'
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const { signin,isAutheticated } = useAuth();



if (!isAutheticated) {
    return <Navigate to='/login' replace/>
}
else {
    return <Outlet />;
}
  
}

export default ProtectedRoute