import React, { Component } from "react";
import moment from "moment";
import "./HomeSelectionView.css";

import HomeSelectionWeekBar from "./HomeSelectionWeekBar";
import HomeSelectionFilter from "./HomeSelectionFilter";

class HomeSelectionView extends Component {
  render() {
    return (
      <div className="HomeSelectionView">
        <HomeSelectionWeekBar />
        <HomeSelectionFilter />
      </div>
    );
  }
}

export default HomeSelectionView;
