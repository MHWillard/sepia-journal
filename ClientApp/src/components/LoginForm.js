import { Routes, Route, NavLink, Navigate, useNavigate, Redirect } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

export default function LoginForm()
{
    const loginDataObject = { username: '', password: '' };
    const [loginData, setLoginData] = useState(loginDataObject);
    const navigate = useNavigate();

    function handleChange(event) {
        //get username
        //build feed URL with username
        //redirect
        event.preventDefault();
        const { name, value } = event.target;
        setLoginData(prevState => ({ ...prevState, [name]: value }));
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const username = loginData.username;
        const url = "/feed/" + username;
        return navigate(url);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="login-username-textbox">Username:</label><br></br>
                <input type="text" id="login-username-textbox" name="username" value={loginData.username} onChange={handleChange}></input><br></br>
                <label htmlFor="login-password-textbox">Password:</label><br></br>
                <input type="text" id="login-password-textbox" name="password" value={loginData.password} onChange={handleChange}></input><br></br>
                <button type="submit" id="submit-login-button">Submit</button>
            </form>
        </div>
    );
}