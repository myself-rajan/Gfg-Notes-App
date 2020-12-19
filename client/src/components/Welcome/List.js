import React from "react";

export const List = ({ Notes, setCurrentNote, CurrentNote }) => (
  <>
    <h3>Notes list</h3>
    <ul className="list-group">
      {Notes.map((item, key) => (
        <li
          className={
            "list-group-item list-group-item-action" +
            (CurrentNote === key ? " active" : "")
          }
          key={key}
          onClick={() => setCurrentNote(key)}
        >
          {item}
        </li>
      ))}
    </ul>
  </>
);
