import React, { Component } from "react";
import "./HomeView.css";

import HomeHeaderView from "./HomeHeaderView";
import HomeFilterView from "./filter/HomeFilterView";
import HomeFeedView from "./feed/HomeFeedView";

class HomeView extends Component {
  render() {
    return (
      <div className="HomeView">
        <HomeHeaderView />
        <HomeFilterView />
        <HomeFeedView />
      </div>
    );
  }
}

export default HomeView;
