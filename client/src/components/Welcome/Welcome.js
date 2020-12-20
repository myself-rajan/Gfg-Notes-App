import React, { Component } from "react";
import { Route } from "react-router-dom";
import List from "./List";
import Note from "./Note";
import { WelcomeHeader } from "./WelcomeHeader";

export default class Welcome extends Component {
  state = {
    Notes: ["Note 1", "Note 2", "Note 3"]
    //CurrentNote: null
  };
  // setCurrentNote = CurrentNote => {
  //   this.setState({ CurrentNote });
  // };
  render() {
    const { User, handleLogout } = this.props;
    return (
      <div className="container">
        <WelcomeHeader User={User} handleLogout={handleLogout}></WelcomeHeader>
        <div className="row mt-3">
          <Route path={["/:NoteID", "/"]}>
            <div className="col-3">
              <List Notes={this.state.Notes}></List>
            </div>
            <div className="col-9">
              <Note></Note>
            </div>
          </Route>
        </div>
      </div>
    );
  }
}

//CurrentNote={this.state.CurrentNote} //List
//setCurrentNote={this.setCurrentNote} //List

//CurrentNote={this.state.CurrentNote} //Note
