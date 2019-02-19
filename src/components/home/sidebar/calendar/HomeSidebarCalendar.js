import React, { Component } from "react";
import moment from "moment";

import Categories from "../../../../api/categories";
import Events from "../../../../api/events";
import HomeSidebarCalendarDayItem from "./HomeSidebarCalendarDayItem";
import "./HomeSidebarCalendar.css";

class HomeSidebarCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: moment(),
      m: moment(),
      frequencies: {},
      colors: {}
    };

    this.previousMonth = this.previousMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.selectDay = this.selectDay.bind(this);

    Categories.getCategories().then(response => {
      let tempColors = {};
      for (let i = 0; i < response.data.length; i++) {
        tempColors[response.data[i].name] = response.data[i]["color"];
      }
      this.setState({
        colors: tempColors
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      today: moment(nextProps.selectedDay),
    });
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

    while (target.getAttribute("moment") === null) {
      target = target.parentElement;
    }

    let m = target.getAttribute("moment");

    this.setState({
      today: moment(m),
      m: moment(m),
    });

    this.props.onSelectDay(moment(m));    // to sync with week view
  }

  render() {
    let dayTagsData = [];
    const m = moment(this.state.m);

    const monthStart = m.startOf("month");
    let monthEnd = moment(monthStart);
    monthEnd = monthEnd.endOf("month");

    const weekStart = monthStart.startOf("week");
    const weekEnd = monthEnd.endOf("week");

    Events.getEventFrequencyByDate(moment(this.state.m).format("YYYY-MM-DD")).then(response => {
      this.setState({
        frequencies: response.data
      });
    });

    for (let m = weekStart; m.isBefore(weekEnd); m.add(1, 'days')) {
      dayTagsData.push({
        moment: m.format(),
        date: m.date(),
        active: m.isSame(this.state.today, 'day'),
        focus: m.isSame(this.state.m, 'month'),
        isToday: m.format('MMM Do YY') === moment().format('MMM Do YY'),
        frequencies: (m.format("YYYY-MM-DD") in this.state.frequencies) ? this.state.frequencies[m.format("YYYY-MM-DD")] : {
            "Boba": 0,
            "Food": 0,
            "Tech": 0,
            "EECS-jobs-announce": 0,
            "Recruiting": 0,
            "Social": 0,
            "Performance Groups": 0,
            "Talks": 0,
            "Other": 0
        }
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
                    frequencies={day.frequencies}
                    colors={this.state.colors}
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
