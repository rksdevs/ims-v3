import React, { useEffect } from 'react'
import { Navigate, BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom'
// import { useContext } from 'react';
// import { AuthContext } from '../context/authContext';
import { useSelector } from 'react-redux'

const ProtectedRoute = () => {
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
    const navigate = useNavigate();
    // const {isAuthenticated} = useContext(AuthContext);

    useEffect(() => {
        if(!isLoggedIn){
            console.log("not authenticated")
            navigate("/login");
        }
    }, [isLoggedIn, navigate])

return (<Outlet />);
}

export default ProtectedRoute