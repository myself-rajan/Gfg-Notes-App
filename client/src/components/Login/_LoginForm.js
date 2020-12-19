import React, { Component } from "react";

class _LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="LoginForm">
          Login Form Here...{typeof this.props.handleAuth}
        </div>
      </div>
    );
  }
}

export default _LoginForm;
