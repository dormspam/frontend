import React, { Component } from "react";
import "./LoginView.css";

class LoginView extends Component {
  render() {
    return (
      <div className="LoginView">
        <div className="bigger-container">
          <img className="logo" src="/img/dormspam-white.svg" alt="Logo" />
          <div className="container">
            <h1>Sign In</h1>
            <input type="text" placeholder="Enter your kerberos" />
            <button>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
