import React from "react";
import MEDitor from "@uiw/react-md-editor";

const NoteContent = ({ match, Notes }) => {
  if (Notes.length === 0) {
    //Assuming that on AJAX call is done.
    return (
      <>
        <h3 className="mb-3">Loading...</h3>
        <p>Please Wait...</p>
      </>
    );
  }
  const Note = Notes.find(n => n.note_id === match.params.NoteID);
  /* // +match.params.NoteID.replace("note-", "") */
  if (!Note) {
    return (
      <>
        <h3 className="mb-3">Note Not Found</h3>
        <p>Whoops! The Note you're looking for is not found!</p>
      </>
    );
  }
  const { note_id, title, desc, user } = Note;
  // Notes[+match.params.NoteID.replace("note-", "")]
  return (
    <>
      <h3 className="mb-3">
        {title}
        <code> ({note_id})</code>
      </h3>
      <p>
        <em>Created by {user}.</em>
      </p>
      <MEDitor.Markdown source={desc} />
    </>
  );
};

export default NoteContent;

// <pre className="border rounded p-1 bg-light">
//{JSON.stringify(match, null, 2)}</pre>
