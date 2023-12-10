import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || null;

    return (isLoggedIn ? <Outlet /> : <Navigate to='/login'/>);
}

export default ProtectedRoute