import React, { Component } from "react";
import { Navigate } from "react-router-dom";

import "./LoginView.css";
import { redirectToLogin } from "../../auth/auth";
class LoginView extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {

    document.getElementById("login-btn").style.backgroundColor = "#888BDE";
    document.getElementById("login-btn").innerHTML = "Sending you to OIDC servers";
    document.getElementById('login-btn').style.cursor = "text";
    
    redirectToLogin();
  }

  render() {
    return (
      <div className="LoginView">
        <div className="bigger-container">
          <img className="logo" src="/img/dormdigest-white.svg" alt="Logo" />
          <div className="container">
            <p><b>DormDigest</b> is a student-run project that automatically parses <a href="https://how-to-dormspam.mit.edu/">dormspam emails</a> by type onto a web calendar. We require authentication to login to protect the privacy of students emails.</p>
            <br></br>
            <p> This project is maintained by <b>SIPB</b>, the <a href="https://sipb.mit.edu/">Student Information Processing Board</a>, and we welcome contributions! Our website has a Python <a href="https://github.com/sipb/dormdigest-backend/">backend</a>, and a React <a href="https://github.com/sipb/dormdigest-frontend/">frontend</a>. You can generally meet us in person at SIPB meetings each Monday at 19:30 in our office, W20-557.</p>
            </div>
          <div className="betaspace"></div>
          <div className="container">
            <h1>Sign In</h1>
            <br></br>
            <button id="login-btn" onClick={this.handleLogin}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
