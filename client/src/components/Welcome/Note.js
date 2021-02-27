import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NoteContent from "./_NoteContent";
import NoteWelcome from "./_NoteWelcome";

const Note = ({ match, Notes }) => {
  return (
    <Switch>
      <Route path="/" exact={true} component={NoteWelcome} />
      <Route path="/new">Add New Note</Route>
      <Route
        path="/:NoteID"
        render={rp => <NoteContent {...rp} Notes={Notes} />}
      />
    </Switch>
  );
};

export default withRouter(Note);

/* CurrentNote != null
? "You're looking at Note #" + CurrentNote
: "Click on a note from left side";

{ CurrentNote, ...props }


<pre className="border rounded p-1 bg-light">
  {JSON.stringify(match, null, 2)}
</pre>*/
