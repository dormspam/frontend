import React, { Component } from "react";
import "./HomeFeedEventsList.css";

import HomeFeedEventsListSection from "./HomeFeedEventsListSection";

class HomeFeedEventsList extends Component {
  render() {
    return (
      <div className={"HomeFeedEventsList" + (this.props.expanded ? " expanded" : "")}>
        <HomeFeedEventsListSection selectedEvent={this.props.selectedEvent} onSelectEvent={this.props.onSelectEvent} />
      </div>
    );
  }
}

export default HomeFeedEventsList;
