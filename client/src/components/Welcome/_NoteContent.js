import React from "react";

const NoteContent = ({ match, Notes }) => {
  if (Notes.length === 0) {
    return (
      <>
        <h3 className="mb-3">Loading...</h3>
        <p>Please Wait...</p>
      </>
    );
  }
  const Note = Notes[+match.params.NoteID.replace("note-", "")];
  if (!Note) {
    return (
      <>
        <h3 className="mb-3">Note Not Found</h3>
        <p>Whoops! The Note you're looking for is not found!</p>
      </>
    );
  }
  const { Title, Desc } = Notes[+match.params.NoteID.replace("note-", "")];
  return (
    <>
      <h3 className="mb-3">{Title}</h3>
      <p>{Desc}</p>
    </>
  );
};

export default NoteContent;

// <pre className="border rounded p-1 bg-light">
//{JSON.stringify(match, null, 2)}</pre>
