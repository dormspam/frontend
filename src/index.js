import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import "./index.css";
import App from "./App";
import LoginView from "./components/login/LoginView";
import * as serviceWorker from "./serviceWorker";

axios.get(process.env.REACT_APP_BACKEND_URL + "/users/current", {
  withCredentials: true
}).then(response => {
  ReactDOM.render(<App />, document.getElementById("root"));
}).catch(error => {
  ReactDOM.render(<LoginView />, document.getElementById("root"));
});

ReactGA.initialize("UA-134713779-1");
ReactGA.pageview(window.location.pathname + window.location.search);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
