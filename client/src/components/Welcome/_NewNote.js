import React from "react";

const NewNote = ({ User }) => {
  return (
    <div className="NewNote">
      <h3 className="mb-3">
        Creating
        <input type="text" placeholder="Enter title" />
      </h3>
      <p>
        <em>Being Created by {User.user}.</em>
      </p>
    </div>
  );
};

export default NewNote;
