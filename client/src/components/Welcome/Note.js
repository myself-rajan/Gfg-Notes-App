import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

const Note = ({ CurrentNote, ...props }) => {
  return (
    <switch>
      <Route path="/" exact={true}>
        Select Something from left
      </Route>
      <Route path="/:NoteID">
        <pre className="border rounded p-1 bg-light">
          {JSON.stringify(props, null, 2)}
        </pre>
      </Route>
    </switch>
  );
};

export default withRouter(Note);

/* CurrentNote != null
    ? "You're looking at Note #" + CurrentNote
    : "Click on a note from left side"; */
