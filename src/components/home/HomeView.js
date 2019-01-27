import React, { Component } from "react";
import "./HomeView.css";

import HomeHeaderCalendar from "./header/HomeHeaderCalendar";
import HomeHeaderView from "./header/HomeHeaderView";
import HomeFilterView from "./filter/HomeFilterView";
import HomeFeedEventModal from "./feed/HomeFeedEventModal";
import HomeFeedView from "./feed/HomeFeedView";

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {
        id: -1
      }
    };

    this.handleSelectEvent = this.handleSelectEvent.bind(this);
  }

  handleSelectEvent(event) {
    if (this.state.event.id === event.id) {
      this.setState({
        event: {
          id: -1
        }
      });
    } else {
      this.setState({ event });
    }
  }

  render() {
    return (
      <div className="HomeView">
        <div className="column left">
          <HomeHeaderView />
          <HomeFilterView />
          <HomeFeedView selectedEvent={this.state.event} onSelectEvent={this.handleSelectEvent} />
        </div>
        <div className="column right">
          <HomeHeaderCalendar />
          <HomeFeedEventModal event={this.state.event} />
        </div>
      </div>
    );
  }
}

export default HomeView;
