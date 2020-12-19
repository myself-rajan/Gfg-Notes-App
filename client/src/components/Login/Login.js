import React from "react";
import LoginForm from "./_LoginForm";

export const Login = ({ handleAuth }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <LoginForm handleAuth={handleAuth}></LoginForm>
          </div>
          <div className="col-6">Register</div>
        </div>
      </div>
    </div>
  );
};
