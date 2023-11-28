import "./login.scss"
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function Login({login}) {
    // const {userDetails} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        login("auth/login", username, password);
        // console.log(userDetails, "from login");
        navigate("/");
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Login;