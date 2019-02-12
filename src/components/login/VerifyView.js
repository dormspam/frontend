import React, { Component } from "react";
import "./VerifyView.css";

class VerifyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
      deleteOnUp: false,
      keyPressed: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
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

  render() {
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

    return (
      <div className="VerifyView">
        <div className="bigger-container">
          <img className="logo" src="/img/dormspam-white.svg" alt="Logo" />
          <div className="container">
            <h1>Verify Email</h1>
            <div className="code-input">
              {inputElements}
            </div>
            <button>Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default VerifyView;
