import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Users from "../../api/users";
import "./LoginView.css";

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      pending: false,
    };

    this.kerberosInput = React.createRef();

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    if (this.kerberosInput.current.value.length == 0 || this.state.pending) {
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
  }

  render() {
    if (this.state.redirect !== null) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div className="LoginView">
        <div className="bigger-container">
          <img className="logo" src="/img/dormspam-white.svg" alt="Logo" />
          <div className="container">
            <h1>Sign In</h1>
            <input ref={this.kerberosInput} type="text" placeholder="Enter your kerberos" />
            <button id="login-btn" onClick={this.handleLogin}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
