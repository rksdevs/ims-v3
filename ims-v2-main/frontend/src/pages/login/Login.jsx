import "./login.scss"
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/authSlice";

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const {username, password} = formData;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {userDetails, isLoggedIn} = useSelector((state)=>state.user);
    const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || null) //fix for user not landing on home page if navigating to /login without clearing the userdetails/isLoggedin from localstorate

    const onChange = (event) => {
        event.preventDefault();
        setFormData((prevState)=>(
              {
                ...prevState,
                [event.target.name]: event.target.value
              }
        ))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const userdata = {
            username,
            password
        }
        dispatch(fetchUser(userdata));
    };

    useEffect(() => {
        if(isLoggedIn){
            setIsAuthenticated(true);
        }
    }, [userDetails, isLoggedIn, navigate])
    
    //fix for user not landing on home page if navigating to /login without clearing the userdetails/isLoggedin from localstorate
    if(isAuthenticated) {
        return <Navigate to="/" />
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type='text'
                    className='form-control'
                    id='username'
                    name='username'
                    value={username}
                    onChange={onChange}
                    placeholder='Enter your username'
                    required />
                </label>
                <label>
                    Password:
                    <input type='password'
                    className='form-control'
                    id='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                    placeholder='Enter your password'
                    required/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Login;