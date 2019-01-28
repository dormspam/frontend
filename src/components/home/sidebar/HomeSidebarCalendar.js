import React, { Component } from "react";
import "./HomeSidebarCalendar.css";

import HomeSidebarCalendarDayItem from "./HomeSidebarCalendarDayItem";

class HomeSidebarCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: new Date(),
    };
  }

  render() {
    return (
      <div className="HomeSidebarCalendar">
        <div className="header">
          <div className="left-button" />
          <h2>February</h2>
          <div className="right-button" />
        </div>
        <div className="calendar">

          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />

          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />

          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />

          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />

          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
          <HomeSidebarCalendarDayItem />
        </div>

      </div>
    );
  }
}

export default HomeSidebarCalendar;
