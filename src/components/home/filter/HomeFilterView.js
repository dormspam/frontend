import React, { Component } from "react";

import HomeFilterWeekBar from "./HomeFilterWeekBar";

class HomeFilterView extends Component {
  render() {
    return (
      <div className="HomeFilterView">
        <h1>Tuesday, February 5</h1>
        <HomeFilterWeekBar />
      </div>
    );
  }
}

export default HomeFilterView;
