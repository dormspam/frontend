import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import "./HomeFeedView.css";

import HomeFeedEventView from "./HomeFeedEventView";

class HomeFeedView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searching: false,
    };

    this.saveEventData = this.saveEventData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const self = this;

    if (nextProps.search !== '') {
      // make axios request here for search
      axios
        .get(process.env.REACT_APP_BACKEND_URL + "/events?q=" + nextProps.search)
        .then(res => {
          self.saveEventData(res.data);
        });
      this.setState({
        searching: true,
      });
    } else {
      axios
        .get(process.env.REACT_APP_BACKEND_URL + "/events/" + nextProps.selectedDay.format("YYYY-MM-DD"))
        .then(res => {
        self.saveEventData(res.data);
      });
    }
  }

  saveEventData(inputData) {
    let times = [];
    let data = inputData.sort((a, b) => moment(a.start_time).valueOf() > moment(b.start_time).valueOf());

    for (var i = 0; i < data.length; i++) {
      if (times.length === 0) {
        times.push([data[i]]);
      } else {
        if (moment(times[times.length - 1][0].start_time).valueOf() === moment(data[i].start_time).valueOf()) {
          times[times.length - 1].push(data[i]);
        } else {
          times.push([data[i]]);
        }
      }
    }

    this.setState({
      data: times
    });
  }

  render() {
    let elements = [];

<<<<<<< HEAD
    for (let i=0; i < sortedTimes.length; i++) {
      eventsDisplay.push(
        <div className="timeline" key={moment(sortedTimes[i]).valueOf() * 1000 + i}>
          <div className="sideline" style={{background: this.getColorForTime(sortedTimes[i])}}>
            <div className="ball" style={{background: this.getColorForTime(sortedTimes[i])}}></div>
=======
    for (var i = 0; i < this.state.data.length; i++) {
      elements.push(
        <div className="timeline" key={"times" + i + "1"}>
          <div className="sideline">
            <div className="ball"></div>
>>>>>>> michaelsilver/search
          </div>
        </div>
      );

      let timeString = moment(this.state.data[i][0].start_time).format("h:mm a");

      if (this.state.searching) {
        timeString = moment(this.state.data[i][0].start_time).format("MMMM Do YYYY, h:mm a");
      }

<<<<<<< HEAD
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
=======
      elements.push(
        <div className="onetime" key={"times" + i + "2"}>{timeString}</div>
>>>>>>> michaelsilver/search
      );

<<<<<<< HEAD
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
=======
      for (var j = 0; j < this.state.data[i].length; j++) {
        elements.push(
          <div className="timeevents" key={this.state.data[i][j].uid}>
            <div className="sidespace" />
            <HomeFeedEventView
              event={this.state.data[i][j]}
              selected={this.props.selectedEvent.uid === this.state.data[i][j].uid}
              onClick={this.props.onSelectEvent} />
          </div>
        );
      }
    }
>>>>>>> michaelsilver/search

    return (
      <div className="HomeFeedView">
        {elements}
      </div>
    );
  }
}

export default HomeFeedView;
