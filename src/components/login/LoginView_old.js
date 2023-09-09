import React, { Component } from "react";
import { Navigate } from "react-router-dom";

import Users from "../../api/users";
import "./LoginView.css";
import { setupSession } from "../../utils/session";

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      pending: false,
    };

    this.kerberosInput = React.createRef();

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) { // enter
      this.handleLogin();
    }
  }

  handleLogin() {
    if (this.kerberosInput.current.value.length === 0 || this.state.pending) {
      return;
    }

    const kerberos = this.kerberosInput.current.value;
    const self = this;

    Users.login(kerberos).then(response => {
      self.setState({
        redirect: "/verify?k=" + kerberos
      });
    });

    document.getElementById("login-btn").style.backgroundColor = "#888BDE";
    document.getElementById("login-btn").innerHTML = "Sending email to " + kerberos + "@mit.edu";
    document.getElementById('login-btn').style.cursor = "text";

    this.setState({
      pending: true
    });

    setupSession("lol");
    this.setState({
      redirect: "/"
    })
  }

  render() {
    if (this.state.redirect !== null) {
      return <Navigate to={this.state.redirect} />;
    }

    return (
      <div className="LoginView">
        <div className="bigger-container">
          <img className="logo" src="/img/dormspam-white.svg" alt="Logo" />
          <div className="container">
            <h1>Sign In</h1>
            <input ref={this.kerberosInput} onKeyDown={this.handleKeyDown} type="text" placeholder="Enter your kerberos" />
            <button id="login-btn" onClick={this.handleLogin}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
