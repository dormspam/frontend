import React, { Component } from "react";
import "./HomeFeedView.css";

import HomeFeedEventModal from "./HomeFeedEventModal";
import HomeFeedEventsList from "./HomeFeedEventsList";
import HomeFeedTimelineView from "./HomeFeedTimelineView";

class HomeFeedView extends Component {
  render() {
    return (
      <div className="HomeFeedView">
        <HomeFeedTimelineView />
        <HomeFeedEventsList expanded={false} />
        <HomeFeedEventModal expanded={true} />
      </div>
    );
  }
}

export default HomeFeedView;
