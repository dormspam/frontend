import React, { Component } from "react";
import "./HomeHeaderCalendar.css";

import HomeHeaderCalendarDayItem from "./HomeHeaderCalendarDayItem";

class HomeHeaderCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: new Date(),
    };
  }

  render() {
    return (
      <div className="HomeHeaderCalendar">
        <div className="header">
          <div className="left-button" />
          <h2>February</h2>
          <div className="right-button" />
        </div>
        <div className="calendar">

          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />

          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />

          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />

          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />

          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
          <HomeHeaderCalendarDayItem />
        </div>

      </div>
    );
  }
}

export default HomeHeaderCalendar;
