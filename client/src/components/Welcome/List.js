import React from "react";
import { Link, withRouter } from "react-router-dom";
import Note from "./Note";

const List = ({ Notes, match }) => (
  <>
    <h3>Notes list</h3>
    <div className="list-group">
      {Notes.map((note, key) => (
        <Link
          to={"/note-" + key}
          className={
            "list-group-item list-group-item-action" +
            (match.params.NoteID &&
            +match.params.NoteID.replace("note-", "") === key
              ? " active"
              : "")
          }
          key={key}
        >
          {note.Title}
        </Link>
      ))}
      {Notes.length === 0 && (
        <span className="list-group-item">
          No notes found! Feel free to add one!
        </span>
      )}
    </div>
  </>
);

export default withRouter(List);
