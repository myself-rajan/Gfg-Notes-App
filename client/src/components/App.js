import React, { Component } from "react";
import Header from "./Header/Header";
import { Login } from "./Login/Login";
import { Welcome } from "./Welcome/Welcome";

export default class App extends Component {
  state = {
    User: null
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
    if (!Users[usernsme]) {
      // User not found
    } else if (Users[username] && Users[username] !== password) {
      // Password is wrong
    } else {
      // Password is right!
      this.setState({ User: { Name: username } });
    }
  };
  render() {
    return (
      <div className="App">
        <Header dark={true} className="Header">
          GfG Notes App
        </Header>
        {this.state.User ? <Welcome User={this.state.User} /> : <Login />}
      </div>
    );
  }
}
