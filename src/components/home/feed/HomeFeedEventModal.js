import React, { Component } from "react";
import "./HomeFeedEventModal.css";

class HomeFeedEventModal extends Component {
  render() {
    return (
      <div className={"HomeFeedEventModal" + (this.props.expanded ? " expanded" : "")}>
        <img src="https://hackmit.org/assets/graphics/hackcover7.png" />
        <h2>HackMIT</h2>
      </div>
    );
  }
}

export default HomeFeedEventModal;
