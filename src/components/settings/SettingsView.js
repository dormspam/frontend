import React, { Component } from "react";
import axios from "axios";
import "./SettingsView.css";

import FrequencyView from "./frequency/FrequencyView";
import PreferencesView from "./preferences/PreferencesView";

class SettingsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: "Frequency",
      loading: true
    };

    axios.get("https://dormspam-calendar.herokuapp.com/users/current", {
      withCredentials: true
    }).then(response => {
      this.setState({
        loading: false,
        user: response.data
      });

      console.log(response.data);
    }).catch(error => {
      window.location.href = "https://dormspam-calendar.herokuapp.com/users/oidc";
    });

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
  }

  handleItemClick(event) {
    this.setState({
      currentItem: event.target.getAttribute("item")
    });
  }

  handleUserUpdate(data) {
    this.setState({
      user: data
    });
  }

  render() {
    if (this.state.loading === true) {
      return <div />;
    }

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
          <FrequencyView hidden={this.state.currentItem !== "Frequency"} onUserUpdate={this.handleUserUpdate} user={this.state.user} />
          <PreferencesView hidden={this.state.currentItem !== "Preferences"} onUserUpdate={this.handleUserUpdate} user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default SettingsView;
