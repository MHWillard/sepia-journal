import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    //for testing purposes: goes to the feed page but later will do actual login auth
  render() {
    return (
        <div>
        <p>Sepia is a journal site where you can update others about what's going on. Log in or create an account and start posting.</p>
        </div>
    );
  }
}
