import React, { Component } from "react";
import "./HomeFilterView.css";

import HomeFilterWeekBar from "./HomeFilterWeekBar";

class HomeFilterView extends Component {
  render() {
    return (
      <div className="HomeFilterView">
        <h1>
          <span className="bold">Tuesday, </span>
          February 5
        </h1>
        <HomeFilterWeekBar />
      </div>
    );
  }
}

export default HomeFilterView;
