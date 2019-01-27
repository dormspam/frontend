import React, { Component } from "react";
import "./HomeView.css";

import HomeHeaderView from "./HomeHeaderView";
import HomeFilterView from "./HomeFilterView";
import HomeFeedView from "./HomeFeedView";

class HomeView extends Component {
  render() {
    var event = {
      name: "hello world",
      description: "asdf"
    };

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
