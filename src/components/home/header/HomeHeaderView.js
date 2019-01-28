import React, { Component } from "react";
import "./HomeHeaderView.css";

class HomeHeaderView extends Component {
  render() {
    return (
      <div className="HomeHeaderView">
        <div className="empty-space" />
        <h1 className="logo">Dormspam</h1>
        <a href="/register">
          <img src="/img/settings.svg" alt="Settings" />
        </a>
      </div>
    );
  }
}

export default HomeHeaderView;
