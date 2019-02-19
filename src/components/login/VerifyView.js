import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Users from "../../api/users";
import { setupSession } from "../../utils/session";
import "./VerifyView.css";

class VerifyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
      deleteOnUp: false,
      keyPressed: 0,
      redirect: null,
      showErrorText: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  keyCodeIsNumber(code) {
    return (code >= 48 && code <= 57) || (code >= 96 && code <= 105);
  }

  handleChange(event) {
    let inputElements = document.getElementsByTagName("input");

    if (this.state.keyPressed === 8) {
      let newCode = this.state.code.substring(0, this.state.code.length - 1);

      this.setState({
        code: newCode
      });

      inputElements[newCode.length].focus();
    } else if (this.keyCodeIsNumber(this.state.keyPressed)) {
      if (this.state.code.length === 4) {
        return;
      }

      let newCode = this.state.code + (this.state.keyPressed - 48).toString();

      this.setState({
        code: newCode
      });

      inputElements[Math.min(newCode.length, 3)].focus();
    }
  }

  handleKeyDown(event) {
    this.setState({
      deleteOnUp: event.keyCode === 8 && event.target.value.length === 0,
      keyPressed: event.keyCode
    });
  }

  handleKeyUp(event) {
    if (this.state.deleteOnUp) {
      this.handleChange(event);
    }
  }

  handleLogin() {
    const url = window.location.href;

    if (!url.includes("?")) {
      this.setState({
        redirect: "/login"
      });

      return;
    }

    const paramString = url.split("?")[1];
    const paramsList = paramString.split("&");
    const params = {};

    for (var i = 0; i < paramsList.length; i++) {
      const param = paramsList[i];

      if (!param.includes("=")) {
        continue;
      }

      params[param.split("=")[0]] = param.split("=")[1];
    }

    const kerberos = params["k"];
    const self = this;

    Users.verify(this.state.code, kerberos).then(response => {
      setupSession(response.data);

      self.setState({
        redirect: "/"
      });
    }).catch(error => {
      self.setState({
        showErrorText: true
      });
    });
  }

  render() {
    if (this.state.redirect !== null) {
      return <Redirect to={this.state.redirect} />;
    }

    let inputElements = [0, 1, 2, 3].map(idx => {
      return <input
                type="text"
                key={idx}
                index={idx}
                placeholder="0"
                value={this.state.code.charAt(idx)}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                onKeyDown={this.handleKeyDown} />
    });

    let text = this.state.showErrorText ? (
      <p>Hmm... that code doesn't look right to us. Please try entering it again.</p>
    ) : (
      <p>Please check your MIT email address for a 4-digit verification code.</p>
    );

    return (
      <div className="VerifyView">
        <div className="bigger-container">
          <img className="logo" src="/img/dormspam-white.svg" alt="Logo" />
          <div className="container">
            <h1>Verify Email</h1>
            {text}
            <div className="code-input">
              {inputElements}
            </div>
            <button onClick={this.handleLogin}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default VerifyView;
