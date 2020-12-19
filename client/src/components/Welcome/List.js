import React from "react";

export const List = ({ Notes }) => (
  <>
    <h3>Notes list</h3>
    <ul className="list-group">
      {Notes.map((item, key) => (
        <li className="list-group-item list-group-item-action" key={key}>
          {item}
        </li>
      ))}
    </ul>
  </>
);
