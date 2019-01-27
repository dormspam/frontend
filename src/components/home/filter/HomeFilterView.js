import React, { Component } from "react";
import moment from "moment";
import "./HomeFilterView.css";

import HomeFilterWeekBar from "./HomeFilterWeekBar";

class HomeFilterView extends Component {
  render() {
    const weekDay = moment().format("dddd");
    const date = moment().format("MMMM D");

    return (
      <div className="HomeFilterView">
        <h1><strong>{weekDay}</strong>, {date}</h1>
        <HomeFilterWeekBar />
      </div>
    );
  }
}

export default HomeFilterView;
