import React, { Component } from "react";
import { Route } from "react-router-dom";
import { GetNotes } from "../../services/Notes";
import List from "./List";
import Note from "./Note";
import { WelcomeHeader } from "./WelcomeHeader";

export default class Welcome extends Component {
  state = {
    Notes: [] /* [
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
    ] */
    //CurrentNote: null
  };
  // setCurrentNote = CurrentNote => {
  //   this.setState({ CurrentNote });
  // };
  RefreshNotes = () => {
    GetNotes().then(res => {
      this.setState({
        Notes: res.data
      });
    });
  };
  componentDidMount() {
    this.RefreshNotes();
  }
  render() {
    const { User, handleLogout } = this.props;
    return (
      <div className="col-12">
        <WelcomeHeader User={User} handleLogout={handleLogout}></WelcomeHeader>
        <div className="row mt-3">
          <Route path={["/:NoteID", "/"]}>
            <div className="col-3">
              <List Notes={this.state.Notes} User={User}></List>
            </div>
            <div className="col-9">
              <Note
                Notes={this.state.Notes}
                User={User}
                RefreshNotes={this.RefreshNotes}
              ></Note>
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
