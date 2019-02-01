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

    const self = this;

    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/events/" + moment().format("YYYY-MM-DD"))
      .then(res => {
      self.saveEventData(res.data);
    });
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

    for (var i = 0; i < this.state.data.length; i++) {
      elements.push(
        <div className="timeline" key={"times" + i + "1"}>
          <div className="sideline">
            <div className="ball"></div>
          </div>
        </div>
      );

      let timeString = moment(this.state.data[i][0].start_time).format("h:mm a");

      if (this.state.searching) {
        timeString = moment(this.state.data[i][0].start_time).format("MMMM Do YYYY, h:mm a");
      }

      elements.push(
        <div className="onetime" key={"times" + i + "2"}>{timeString}</div>
      );

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

    return (
      <div className="HomeFeedView">
        {elements}
      </div>
    );
  }
}

export default HomeFeedView;
