import React, { useEffect } from 'react'
import { Navigate, BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const ProtectedRoute = ({}) => {
    const navigate = useNavigate();
    const {isAuthenticated} = useContext(AuthContext);

    useEffect(() => {
        if(!isAuthenticated){
            console.log("not authenticated")
            navigate("/login");
        }
    }, [isAuthenticated])

return (<Outlet />);
}

export default ProtectedRoute