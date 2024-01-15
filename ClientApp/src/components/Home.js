import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div>
            <form>
                <label for="username-textbox">Username:</label><br></br>
                <input type="text" id="username-textbox" name="username-textbox"></input><br></br>
                <label for="password-textbox">Password:</label><br></br>
                <input type="text" id="password-textbox" name="password-textbox"></input>
            </form>
            <button type="button" id="login-button">Submit</button>
      </div>
    );
  }
}
