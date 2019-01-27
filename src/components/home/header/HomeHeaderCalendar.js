import React, { Component } from "react";
import Calendar from 'react-calendar';
import "./HomeHeaderCalendar.css";

class HomeHeaderCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({ date });
  }

  render() {
    return (
      <div className="HomeHeaderCalendar">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default HomeHeaderCalendar;
