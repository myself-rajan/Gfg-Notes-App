import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

const Note = ({ match }) => {
  return (
    <switch>
      <Route path="/" exact={true}>
        Select Something from left
      </Route>
      <Route path="/:NoteID">
        <pre className="border rounded p-1 bg-light">
          {JSON.stringify(match, null, 2)}
        </pre>
      </Route>
    </switch>
  );
};

export default withRouter(Note);

/* CurrentNote != null
? "You're looking at Note #" + CurrentNote
: "Click on a note from left side";

{ CurrentNote, ...props }*/
