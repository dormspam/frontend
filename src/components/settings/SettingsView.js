import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import "./SettingsView.css";

import FrequencyView from "./frequency/FrequencyView";
import PreferencesView from "./preferences/PreferencesView";

class SettingsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: "Preferences",
      loading: true,
      redirect: null,
    };

    axios.get(process.env.REACT_APP_BACKEND_URL + "/users/current", {
      withCredentials: true
    }).then(response => {
      this.setState({
        loading: false,
        user: response.data
      });
      console.log(response.data);

    }).catch(error => {
      window.location.href = process.env.REACT_APP_BACKEND_URL + "/users/oidc";
    });

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
  }

  handleItemClick(event) {
    const self = this;

    if (event.target.getAttribute("item") === "Log Out") {
      axios.delete(process.env.REACT_APP_BACKEND_URL + "/users/current", {
        withCredentials: true
      }).then(response => {
        self.setState({
          redirect: "/",
        });
      });
    }
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
    if (this.state.redirect !== null) {
      return <Redirect to={this.state.redirect} />;
    } else if (this.state.loading === true) {
      return <div />;
    }

    let settingsItems = ["Preferences", "Frequency", "Log Out"];
    let settingsItemTags = settingsItems.map(item => (
      <li className={item === this.state.currentItem ? "active" : ""} key={item} item={item} onClick={this.handleItemClick}>{item}</li>
    ));

    return (
      <div className="SettingsView">
        <div className="right column">
          <FrequencyView hidden={this.state.currentItem !== "Frequency"} onUserUpdate={this.handleUserUpdate} user={this.state.user} />
          <PreferencesView hidden={this.state.currentItem !== "Preferences"} onUserUpdate={this.handleUserUpdate} user={this.state.user} />
        </div>
        <div className="left column">
          <div className="headertop">
            <a href="/">
              <img src="/img/back.svg" alt="Settings" />
              <br />
              <img className="logo" src="/img/dormspam.svg" alt="Logo" />
            </a>
          </div>
          <ul>
            {settingsItemTags}
          </ul>
        </div>
      </div>
    );
  }
}

export default SettingsView;
