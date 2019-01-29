import React, { Component } from "react";
import axios from "axios";
import "./AuthView.css";

class AuthView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        "login": {
          "title": "Log In"
        },
        "register": {
          "title": "Register"
        }
      }[this.props.type]
    };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/shapes.js";
    script.async = true;

    document.body.appendChild(script);
  }

  handleSubmit() {
    axios.post("http://localhost:5000/users" + (this.props.type === "login" ? "/login" : ""), {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    }).then(response => {
      console.log(response)
    });
  }

  render() {
    return (
      <div className="AuthView">
        <div className="shapes">
          <svg xmlns="http://www.w3.org/2000/svg" width="37.196" height="32.213" viewBox="0 0 37.196 32.213">
            <symbol id="triangle">
              <svg xmlns="http://www.w3.org/2000/svg" width="25.675" height="22.236" viewBox="0 0 25.675 22.236">
                <path strokeWidth="3" strokeMiterlimit="10" d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z"></path>
              </svg>
            </symbol>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="29.093" height="14.546" viewBox="0 0 29.093 14.546">
            <symbol id="semicircle">
              <path strokeWidth="3" strokeMiterlimit="10" d="M1.5 14.546C1.5 7.34 7.34 1.5 14.547 1.5c7.205 0 13.046 5.84 13.046 13.046"></path>
            </symbol>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="17.046" height="36.016" viewBox="0 0 17.046 36.016">
            <symbol id="spring">
              <path strokeWidth="3" strokeMiterlimit="10" d="M9.945 34.614S1.46 31.38 1.5 23.92s11.73-4.797 11.73-4.797S3.82 16.708 4.18 8.77s12.784-7.255 12.784-7.255"></path>
            </symbol>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="25.675" height="22.236" viewBox="0 0 25.675 22.236">
            <symbol id="line">
              <path strokeWidth="3" strokeMiterlimit="10" d="M4.92 2.514L21.964 19.56"></path>
            </symbol>
          </svg>
        </div>

        <div className="container">
          <h2>{this.state.data.title}</h2>
          <input id="email" type="text" placeholder="Email address" />
          <input id="password" type="password" placeholder="Password" />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default AuthView;
