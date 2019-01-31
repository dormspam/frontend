import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomeHeaderView.css";

class HomeHeaderView extends Component {
  render() {
    return (
      <div className="HomeHeaderView">
        <div className="empty-space" />
        <h1 className="logo">Dormspam</h1>
        <Link to="/settings">
          <img src="/img/settings.svg" alt="Settings" />
        </Link>
      </div>
    );
  }
}

export default HomeHeaderView;
