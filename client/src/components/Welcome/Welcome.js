import React, { Component } from "react";
import { Route } from "react-router-dom";
import List from "./List";
import Note from "./Note";
import { WelcomeHeader } from "./WelcomeHeader";

export default class Welcome extends Component {
  state = {
    Notes: [
      {
        NoteID: "hello",
        Title: "Hello World",
        Desc: "Hello World Hello World Hello world Hello World"
      },
      {
        NoteID: "faq",
        Title: "Frequently Asked Question",
        Desc: "Hello World Hello World Hello world Hello World"
      },
      {
        NoteID: "Ideas",
        Title: "My Ideas",
        Desc: "Hello World Hello World Hello world Hello World"
      },
      {
        NoteID: "Suggestion",
        Title: "Suggestion",
        Desc: "Hello World Hello World Hello world Hello World"
      }
    ]
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
              <Note Notes={this.state.Notes}></Note>
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
