import React, { Component } from "react";
import "./HomeFilterWeekBar.css";

import HomeFilterWeekBarDayItem from "./HomeFilterWeekBarDayItem";

class HomeFilterWeekBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: new Date(),
    };
  }

  render() {
    const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayTagsData = weekDays.map(
      (day, i) => {
        const date = new Date(this.state.day.getTime() + (24*60*60*1000*(i-this.state.day.getDay()))).getDate();
        return {
          day: day,
          date: date,
          active: this.state.day.getDate() === date
        };
      }
    );
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
