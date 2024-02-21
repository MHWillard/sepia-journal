import React, { Component } from 'react';
import DocumentTitle from "./DocumentTitle.js"
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

//error box => component, useEffect re-renders based on provided error info

export default function CreateAccount() {
    DocumentTitle("Sepia Journal - Create New Account");

    //for testing purposes: goes to the feed page but later will do actual login auth
    return (
        <div>
            <div>
                <form>
                <label for="email-textbox">Email:</label><br></br>
                <input type="text" id="email-textbox" name="email-textbox"></input><br></br>
                <label for="username-textbox">Username:</label><br></br>
                <input type="text" id="username-textbox" name="username-textbox"></input><br></br>
                <label for="password-textbox">Password:</label><br></br>
                <input type="text" id="password-textbox" name="password-textbox"></input><br></br>
                <button type="submit" id="submit-create-account">Submit</button>
                </form>
            </div>
            <div id="error-box-password">
                <p>This password doesn't fit password criteria. Make sure the password is at least eight characters long, contains at least one number, at least one capital letter, and at least one special character.</p>
            </div>
            <div id="error-box-username">
                <p>This username already exists. Please pick a different one.</p>
            </div>
        </div>
    );
}