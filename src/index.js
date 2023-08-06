import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

//ReactGA.initialize("UA-38208507-9");
//ReactGA.pageview(window.location.pathname + window.location.search);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
