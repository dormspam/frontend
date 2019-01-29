import React, { Component } from "react";
import moment from "moment";
import "./HomeSidebarCalendar.css";

import HomeSidebarCalendarDayItem from "./HomeSidebarCalendarDayItem";

class HomeSidebarCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: moment(),
    };
  }

  render() {
    let dayTagsData = [];
    const m = moment(this.state.today);

    const monthStart = m.startOf("month");
    let monthEnd = moment(monthStart);
    monthEnd = monthEnd.endOf("month");

    const weekStart = monthStart.startOf("week");
    const weekEnd = monthEnd.endOf("week");

    for (let m = weekStart; m.isBefore(weekEnd); m.add(1, 'days')) {
      dayTagsData.push({
        date: m.date(),
        active: m.isSame(this.state.today, 'day'),
        focus: m.isSame(this.state.today, 'month'),
      });
    }

    const dayTags = dayTagsData.map(
      (day, i) => <HomeSidebarCalendarDayItem
                    key={i}
                    day={day.date}
                    active={day.active}
                    focus={day.focus}
                  />
    );

    return (
      <div className="HomeSidebarCalendar">
        <div className="header">
          <div className="left-button" />
          <h2>{this.state.today.format('MMMM')}</h2>
          <div className="right-button" />
        </div>
        <div className="calendar">
          {dayTags}
        </div>
      </div>
    );
  }
}

export default HomeSidebarCalendar;
