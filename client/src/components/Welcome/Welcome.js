import React from "react";

export const Welcome = ({ User, handleLogout }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            Welcome, {User.Name}
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
