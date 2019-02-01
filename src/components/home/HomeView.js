import React, { Component } from "react";
import moment from "moment";
import "./HomeView.css";

import HomeSidebarCalendar from "./sidebar/HomeSidebarCalendar";
import HomeHeaderView from "./header/HomeHeaderView";
import HomeSelectionView from "./selection/HomeSelectionView";
import HomeSidebarEventModal from "./sidebar/HomeSidebarEventModal";
import HomeFeedView from "./feed/HomeFeedView";

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: null,
      day: moment(),
      search: '',
    };

    this.handleSelectEvent = this.handleSelectEvent.bind(this);
    this.handleSelectDay = this.handleSelectDay.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSelectEvent(event) {
    if (this.state.event !== null && this.state.event.uid === event.uid) {
      this.setState({
        event: null
      });
    } else {
      this.setState({ event });
    }
  }

  handleSelectDay(m) {
    this.setState({
      day: m,
    });
  }

  handleSearch(search) {
    this.setState({
      search: search,
    });
  }

  render() {
    return (
      <div className="HomeView">
        <div className="column left">
          <HomeHeaderView />
          <HomeSelectionView
            onSearch={this.handleSearch}
            selectedDay={this.state.day}
            onSelectDay={this.handleSelectDay}
          />
          <HomeFeedView
            search={this.state.search}
            selectedDay={this.state.day}
            selectedEvent={this.state.event}
            onSelectEvent={this.handleSelectEvent}
          />
        </div>
        <div className="column right">
          <HomeSidebarCalendar
            selectedDay={this.state.day}
            onSelectDay={this.handleSelectDay}
          />
          <HomeSidebarEventModal
            event={this.state.event}
          />
        </div>
      </div>
    );
  }
}

export default HomeView;
