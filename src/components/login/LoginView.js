import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./LoginView.css";

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null
    };

    this.kerberosInput = React.createRef();

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const kerberos = this.kerberosInput.current.value;
    const self = this;

    axios.post(process.env.REACT_APP_BACKEND_URL + "/users/login", {
      kerberos: kerberos
    }, {
      withCredentials: true
    }).then(response => {
      self.setState({
        redirect: "/verify?k=" + kerberos
      });
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
            <button onClick={this.handleLogin}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
