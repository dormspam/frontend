import React, { Component } from "react";
import "./HomeFeedEventsList.css";

import HomeFeedEventsListSection from "./HomeFeedEventsListSection";

class HomeFeedEventsList extends Component {
  render() {
    return (
      <div className="HomeFeedEventsList">
        <HomeFeedEventsListSection />
      </div>
    );
  }
}

export default HomeFeedEventsList;
