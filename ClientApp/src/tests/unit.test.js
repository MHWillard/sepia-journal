/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavMenu from '../components/NavMenu'
import {LoginContext} from '../contexts/LoginContext'

/*
test: handle component making and passing in login token and testing for render

set login package token
render component with login information

test for:
title = has username of user
new post = option shows up if token is present

ANOTHER TEST: render and test for when these things aren't present

arrange, act, assert
*/

class LoginData {
    constructor(logged_in, token) {
        this.logged_in = logged_in;
        this.token = token;
    }
}

test('login button shouldn\'t show', async () => {
    render(<NavMenu />)

    const loginButton = await screen.getByRole('login-button');

    expect(loginButton).toBe().Null();

});