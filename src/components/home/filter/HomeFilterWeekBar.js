import React, { Component } from "react";
import moment from "moment";
import "./HomeFilterWeekBar.css";

import HomeFilterWeekBarDayItem from "./HomeFilterWeekBarDayItem";

class HomeFilterWeekBar extends Component {
  render() {
    let dayTagsData = [];
    const weekStart = moment().startOf("week");
    const weekEnd = moment().endOf("week");

    for (let m=weekStart; m.isBefore(weekEnd); m.add(1, 'days')) {
      dayTagsData.push({
        day: m.format('ddd').toUpperCase(),
        date: m.date(),
        active: m.day() === moment().day()
      });
    }

    const dayTags = dayTagsData.map(
      day => <HomeFilterWeekBarDayItem key={day.date} data={day} />
    );

    return (
      <div className="HomeFilterWeekBar">
        <div className="left-button" />
        <div className="weekdays">
          {/* <HomeFilterWeekBarDayItem day='S' active={true}/> */}
          {dayTags}
        </div>
        <div className="right-button" />
      </div>
    );
  }
}

export default HomeFilterWeekBar;
