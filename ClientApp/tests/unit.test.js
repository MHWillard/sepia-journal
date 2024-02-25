import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import NavMenu from '../src/components/NavMenu'

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

test('render login button based on token', async () => {
    let login = new LoginData(true, 'login_token');

    render(<NavMenu loginData={login} />)

    const loginButton = await screen.getByRole('login-button');

    expect(loginButton).toNotBe().Null();

});