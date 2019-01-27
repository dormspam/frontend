import React, { Component } from "react";
import "./HomeView.css";

import HomeHeaderCalendar from "./header/HomeHeaderCalendar";
import HomeHeaderView from "./HomeHeaderView";
import HomeFilterView from "./filter/HomeFilterView";
import HomeFeedView from "./feed/HomeFeedView";

class HomeView extends Component {
  render() {
    return (
      <div className="HomeView">
        <div className="column left">
          <HomeHeaderView />
          <HomeFilterView />
          <HomeFeedView />
        </div>
        <div className="column right">
          <HomeHeaderCalendar />
        </div>
      </div>
    );
  }
}

export default HomeView;
