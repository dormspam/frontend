import React, { Component } from "react";
import moment from "moment";
import "./HomeSidebarCalendar.css";

import HomeSidebarCalendarDayItem from "./HomeSidebarCalendarDayItem";

class HomeSidebarCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: moment(),
      m: moment(),
    };

    this.previousMonth = this.previousMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.selectDay = this.selectDay.bind(this);
  }

  previousMonth() {
    this.setState({
      m: this.state.m.subtract(1, 'months')
    });
  }

  nextMonth() {
    this.setState({
      m: this.state.m.add(1, 'months')
    });
  }

  /* 0 is sunday, 1 is monday, etc */
  selectDay(event) {
    let target = event.target;

    if (target.getAttribute("index") === null) {
      target = target.parentElement;
    }

    if (target.getAttribute("index") === null) {
      target = target.parentElement;
    }

    let m = target.getAttribute("moment");

    this.setState({
      today: moment(m),
    });
  }

  render() {
    let dayTagsData = [];
    const m = moment(this.state.m);

    const monthStart = m.startOf("month");
    let monthEnd = moment(monthStart);
    monthEnd = monthEnd.endOf("month");

    const weekStart = monthStart.startOf("week");
    const weekEnd = monthEnd.endOf("week");

    for (let m = weekStart; m.isBefore(weekEnd); m.add(1, 'days')) {
      dayTagsData.push({
        moment: m.format(),
        date: m.date(),
        active: m.isSame(this.state.today, 'day'),
        focus: m.isSame(this.state.m, 'month'),
        isToday: m.format('MMM Do YY') === moment().format('MMM Do YY'),
      });
    }

    const dayTags = dayTagsData.map(
      (day, i) => <HomeSidebarCalendarDayItem
                    key={i}
                    moment={day.moment}
                    day={day.date}
                    active={day.active}
                    focus={day.focus}
                    isToday={day.isToday}
                    onClick={this.selectDay}
                  />
    );

    return (
      <div className="HomeSidebarCalendar">
        <div className="header">
          <div className="left-button" onClick={this.previousMonth}/>
          <h2>{this.state.m.format('MMMM YYYY')}</h2>
          <div className="right-button" onClick={this.nextMonth}/>
        </div>
        <div className="calendar">
          {dayTags}
        </div>
      </div>
    );
  }
}

export default HomeSidebarCalendar;
