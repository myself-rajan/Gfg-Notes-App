import React, { useState } from "react";
import MEditor from "@uiw/react-md-editor";
import { Sluggify } from "../Helpers/Helpers.js";

const NewNote = ({ User }) => {
  User = User.Name;
  const [Desc, setDesc] = useState("");
  const [Title, setTitle] = useState("");
  const NoteID = Sluggify(Title);
  return (
    <div className="NewNote">
      <h3 className="mb-3">
        Creating
        <input
          type="text"
          placeholder="Enter title"
          value={Title}
          onChange={e => setTitle(e.target.value)}
        />
      </h3>
      <p>
        <em>Being Created by {User}.</em>
      </p>
      <MEditor height={200} value={Desc} onChange={setDesc} />
      <pre className="mt-3.border rounded bg-light">
        {JSON.stringify({ NoteID, Desc, Title, User }, null, 2)}
      </pre>
    </div>
  );
};

export default NewNote;
