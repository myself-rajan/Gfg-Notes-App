import React from "react";

export const Welcome = ({ User }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">Welcome, {User.Name}.</div>
        </div>
      </div>
    </div>
  );
};
