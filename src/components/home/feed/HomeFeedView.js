import React, { Component } from "react";
import "./HomeFeedView.css";

import HomeFeedEventsList from "./HomeFeedEventsList";
import HomeFeedTimelineView from "./HomeFeedTimelineView";

class HomeFeedView extends Component {
  render() {
    return (
      <div className="HomeFeedView">
        <HomeFeedTimelineView />
        <HomeFeedEventsList selectedEvent={this.props.selectedEvent} onSelectEvent={this.props.onSelectEvent} />
      </div>
    );
  }
}

export default HomeFeedView;
