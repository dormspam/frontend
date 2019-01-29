import React, { Component } from "react";
import moment from "moment";
import "./HomeSelectionWeekBar.css";

import HomeSelectionWeekBarDayItem from "./HomeSelectionWeekBarDayItem";

class HomeSelectionWeekBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeekStart: moment().startOf("week"),
      currentDate: moment()
    };

    this.previousWeek = this.previousWeek.bind(this);
    this.nextWeek = this.nextWeek.bind(this);
    this.selectDay = this.selectDay.bind(this);
  }

  previousWeek() {
    this.setState({
      currentWeekStart: moment(this.state.currentWeekStart).add(-7, 'days')
    });
  }

  nextWeek() {
    this.setState({
      currentWeekStart: moment(this.state.currentWeekStart).add(7, 'days')
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

    let index = target.getAttribute("index");

    let m = moment(this.state.currentWeekStart);
    m = m.add(index, 'days');
    this.setState({
      currentDate: m
    });
  }

  render() {
    let dayTagsData = [];

    for (let i=0; i < 7; i++) {
      dayTagsData.push({
        index: i,
        day: moment(this.state.currentWeekStart).add(i, 'days').format('ddd').toUpperCase(),
        date: moment(this.state.currentWeekStart).add(i, 'days').date(),
        active: (moment(this.state.currentWeekStart).add(i, 'days').day() === moment(this.state.currentDate).day()) && (moment(this.state.currentWeekStart).add(i, 'days').month() === moment(this.state.currentDate).month()) && (moment(this.state.currentWeekStart).add(i, 'days').month() === moment(this.state.currentDate).month()),
        isToday: moment(this.state.currentWeekStart).add(i, 'days') === moment().day()
      });
    }

    const dayTags = dayTagsData.map(
      day => <HomeSelectionWeekBarDayItem
                onClick={this.selectDay}
                key={day.date}
                data={day} />
    );

    return (
      <div className="HomeSelectionWeekBar">
        <h1><span className="bold">{this.state.currentDate.format('dddd')}</span>, {this.state.currentDate.format('MMMM Do')}</h1>
        <div className="weekbar">
          <div className="left-button" />
          <div className="weekdays">
            {dayTags}
          </div>
          <div className="right-button" />
        </div>
      </div>
    );
  }
}

export default HomeSelectionWeekBar;
