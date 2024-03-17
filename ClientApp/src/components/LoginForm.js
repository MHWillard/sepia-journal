import { Routes, Route, NavLink, Navigate, useNavigate, } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

export default function LoginForm()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(event) {
        //get username
        //build feed URL with username
        //redirect
        event.preventDefault();
        const username = event.target.username-textbox.value;
        const url = "https://localhost:44440/feed" + username;
        <Navigate to={url} replace />
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="login-username-textbox">Username:</label><br></br>
                <input type="text" id="login-username-textbox" name="username-textbox"></input><br></br>
                <label htmlFor="login-password-textbox">Password:</label><br></br>
                <input type="text" id="login-password-textbox" name="password-textbox"></input><br></br>
                <button type="submit" id="login-button">Submit</button>
            </form>
        </div>
    );
}