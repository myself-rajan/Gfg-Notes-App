import React from "react";

const NoteContent = ({ match, Notes }) => {
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
