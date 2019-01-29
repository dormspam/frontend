import React, { Component } from "react";
import "./SettingsView.css";

import PreferencesView from "./preferences/PreferencesView";

class SettingsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: "Preferences"
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event) {
    this.setState({
      currentItem: event.target.getAttribute("item")
    });
  }

  render() {
    let settingsItems = ["Preferences", "Frequency", "Log Out"];
    let settingsItemTags = settingsItems.map(item => (
      <li className={item === this.state.currentItem ? "active" : ""} key={item} item={item} onClick={this.handleItemClick}>{item}</li>
    ));

    return (
      <div className="SettingsView">
        <div className="left column">
          <h1><a href="/">Dormspam</a></h1>
          <ul>
            {settingsItemTags}
          </ul>
        </div>
        <div className="right column">
          <PreferencesView hidden={this.state.currentItem !== "Preferences"} />
        </div>
      </div>
    );
  }
}

export default SettingsView;