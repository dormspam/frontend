import React, { Component } from "react";
import logo from "./logo.svg";
import "./HomeView.css";

import EventModal from "./EventModal";

class HomeView extends Component {
  render() {
    var event = {
      name: "hello world",
      description: "asdf"
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <EventModal event={event} />
        </header>
      </div>
    );
  }
}

export default HomeView;
