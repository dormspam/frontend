import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import "./HomeFeedView.css";

import HomeFeedEventView from "./HomeFeedEventView";

class HomeFeedView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.organizeData = this.organizeData.bind(this);
    this.getAllEvents = this.getAllEvents.bind(this);
    this.getEventsByTime = this.getEventsByTime.bind(this);
    this.getColorForTime = this.getColorForTime.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const self = this;

    axios.get("https://dormspam-calendar.herokuapp.com/events/" + nextProps.selectedDay.format("YYYY-MM-DD")).then(response => {
      self.setState({
        data: response.data
      });
    });
  }

  organizeData() {
    let data = this.state.data.sort((a, b) => a.start_time - b.start_time);
    let formatted = {};

    for (let i = 0; i < data.length; i++) {
      if (data[i].start_time in formatted) {
        formatted[data[i].start_time].push(data[i]);
      } else {
        formatted[data[i].start_time] = [data[i]];
      }
    }

    return formatted;
  }

  getAllEvents() {
    let data = this.organizeData();
    let sortedTimes = Object.keys(data);
    let eventsDisplay = [];

    sortedTimes.sort();

    for (let i=0; i < sortedTimes.length; i++) {
      eventsDisplay.push(
        <div className="timeline" key={moment(sortedTimes[i]).valueOf() * 1000 + i}>
          <div className="sideline" style={{background: this.getColorForTime(sortedTimes[i])}}>
            <div className="ball" style={{background: this.getColorForTime(sortedTimes[i])}}></div>
          </div>
        </div>
      );

      const timeString = moment(sortedTimes[i]).format("h:mm a");

      eventsDisplay.push(
        <div className="onetime" key={-moment(sortedTimes[i]).valueOf() * 1000 + i}>{timeString}</div>
      );

      eventsDisplay = eventsDisplay.concat(this.getEventsByTime(data[sortedTimes[i]]));
    }

    return eventsDisplay;
  }

  getEventsByTime(events) {
    let formatted = [];

    for (let i = 0; i < events.length; i++) {
      formatted.push(
        <div className="timeevents" key={events[i].uid} style={{borderLeft: '3px solid ' + this.getColorForTime(events[i].start_time)}}>
          <div className="sidespace" />
          <HomeFeedEventView
            event={events[i]}
            selected={this.props.selectedEvent.uid === events[i].uid}
            color={this.getColorForTime(events[i].start_time)}
            onClick={this.props.onSelectEvent} />
        </div>
      );
    }

    return formatted;
  }

  getColorForTime(time) {
    let hour = moment(time).format("H");
    const colors = ["#E7C86F", "#F0B65A", "#ED9B59", "#E5815E", "#DB7574", "#E163AC",
                    "#C85CE7", "#A26AE6", "#8873E5", "#6F73F1", "#606EE7", "#5780DC",
                    "#658BD5", "#6AA4EB", "#7DB9EB", "#5FBCE2", "#38C0E2", "#66C7DD",
                    "#6FD5DE", "#60D7C3", "#73E9A1", "#A8EA75", "#AADE6E", "#D5EB7A"];
    return colors[parseInt(hour)];
  }

  render() {
    this.organizeData();

    return (
      <div className="HomeFeedView">
        {this.getAllEvents()}
      </div>
    );
  }
}

export default HomeFeedView;
