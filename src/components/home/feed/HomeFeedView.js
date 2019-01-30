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
  }

  componentWillReceiveProps(nextProps) {
    const self = this;

    axios.get("https://dormspam-calendar.herokuapp.com/events/" + nextProps.date).then(response => {
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
        <div className="timeline" key={sortedTimes[i] * 1000 + i}>
          <div className="sideline">
            <div className="ball"></div>
          </div>
        </div>
      );

      const timeString = moment(sortedTimes[i]).format("h:mm a");

      eventsDisplay.push(
        <div className="onetime" key={-sortedTimes[i] * 1000 + i}>{timeString}</div>
      );

      eventsDisplay = eventsDisplay.concat(this.getEventsByTime(data[sortedTimes[i]]));
    }

    return eventsDisplay;
  }

  getEventsByTime(events) {
    let formatted = [];

    for (let i = 0; i < events.length; i++) {
      formatted.push(
        <div className="timeevents" key={events[i].uid}>
          <div className="sidespace" />
          <HomeFeedEventView
            event={events[i]}
            selected={this.props.selectedEvent.uid === events[i].uid}
            onClick={this.props.onSelectEvent} />
        </div>
      );
    }

    return formatted;
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
