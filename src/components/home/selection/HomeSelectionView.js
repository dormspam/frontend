import React, { Component } from "react";
import moment from "moment";
import "./HomeSelectionView.css";

import HomeSelectionWeekBar from "./HomeSelectionWeekBar";

class HomeSelectionView extends Component {
  render() {
    const weekDay = moment().format("dddd");
    const date = moment().format("MMMM D");

    return (
      <div className="HomeSelectionView">
        <h1><span className="bold">{weekDay}</span>, {date}</h1>
        <HomeSelectionWeekBar />
      </div>
    );
  }
}

export default HomeSelectionView;
