import React, { Component } from "react";
import "./HomeFeedEventView.css";

class HomeFeedEventView extends Component {
  render() {
    return (
      <div className="HomeFeedEventView" onClick={this.props.onClick}>
        <h3>HackMIT</h3>
        <span>Kresge Auditorium</span>
      </div>
    )
  }
}

export default HomeFeedEventView;
