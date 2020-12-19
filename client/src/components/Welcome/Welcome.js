import React from "react";
import { List } from "./List";

export const Welcome = ({ User, handleLogout }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="border rounded p-2">
              <p>Welcome, {User.Name}.</p>
              <button className="btn btn-danger btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-3">
            <List Notes={["Note1", "Note2", "Note3", "Note4"]}></List>
          </div>
          <div className="col-9">Right Window</div>
        </div>
      </div>
    </div>
  );
};
