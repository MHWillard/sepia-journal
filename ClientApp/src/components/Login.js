import React, { Component } from 'react';
import LoginForm from './LoginForm.js';
import DocumentTitle from "./DocumentTitle.js"
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Login() {
    DocumentTitle("Sepia Journal - Login");

    //for testing purposes: goes to the feed page but later will do actual login auth
    return (
        <div>
            <LoginForm />
            <div id="create-new-account-link">
                <Nav fill pills>
                    <NavItem>
                        <NavLink active className="text-dark" id="create-account-button" href="/create-account">Create an account</NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
        );
}