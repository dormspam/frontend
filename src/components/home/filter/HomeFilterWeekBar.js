import React, { Component } from "react";
import "./HomeFilterWeekBar.css";

import HomeFilterWeekBarDayItem from "./HomeFilterWeekBarDayItem";

class HomeFilterWeekBar extends Component {
  render() {
    return (
      <div className="HomeFilterWeekBar">
        <div className="left-button" />
        <div className="weekdays">
          <HomeFilterWeekBarDayItem />
        </div>
        <div className="right-button" />
      </div>
    );
  }
}

export default HomeFilterWeekBar;
