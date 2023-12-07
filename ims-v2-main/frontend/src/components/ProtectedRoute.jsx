import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
// import { useContext } from 'react';

const ProtectedRoute = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const navigate = useNavigate();
    useEffect(() => {
        if(!isLoggedIn){
            navigate("/login");
        }
    }, [isLoggedIn, navigate])

return (<Outlet />);
}

export default ProtectedRoute