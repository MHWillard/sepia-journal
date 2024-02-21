import React, { Component } from 'react';
import LoginForm from './LoginForm.js';

export class Home extends Component {
    static displayName = Home.name;

    //for testing purposes: goes to the feed page but later will do actual login auth
  render() {
    return (
        <LoginForm />
    );
  }
}
