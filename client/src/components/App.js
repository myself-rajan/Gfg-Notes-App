import React, { Component } from "react";
import Header from "./Header/Header";
import { Login } from "./Login/Login";
import { Welcome } from "./Welcome/Welcome";

export default class App extends Component {
  state = {
    User: null,
    Error: null
  };
  handleAuth = (username, password) => {
    const Users = {
      Rajan: "rks12345",
      Praveen: "Hello123",
      Bhushan: "dark456",
      Rishav: "ris2000",
      Shivan: "password",
      Isabel: "coolcat123",
      Shashi: "akcd@123"
    };
    if (!Users[username]) {
      // User not found
      this.setState({ User: null, Error: "User Not Found!" });
    } else if (Users[username] && Users[username] !== password) {
      // Password is wrong
      this.setState({ User: null, Error: "Wrong Password!" });
    } else {
      // Password is right!
      this.setState({ User: { Name: username }, Error: null });
    }
  };
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header">
          GfG Notes App
        </Header>
        {this.state.User ? (
          <Welcome User={this.state.User} />
        ) : (
          <Login handleAuth={this.handleAuth} />
        )}
      </div>
    );
  }
}
