import React, { Component } from "react";
import "./HomeFeedEventsListSection.css";

import HomeFeedEventView from "./HomeFeedEventView";

class HomeFeedEventsListSection extends Component {
  handleClick() {
    console.log("clicking")
  }

  render() {
    return (
      <div className="HomeFeedEventsListSection">
        <h2>Tuesday 6:00pm</h2>
        <HomeFeedEventView onClick={this.handleClick} />
        <HomeFeedEventView />
        <HomeFeedEventView />
      </div>
    );
  }
}

export default HomeFeedEventsListSection;
