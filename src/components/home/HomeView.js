import React, { Component } from "react";
import moment from "moment";
import "./HomeView.css";

import HomeSidebarCalendar from "./sidebar/calendar/HomeSidebarCalendar";
import HomeSidebarCategoriesView from "./sidebar/categories/HomeSidebarCategoriesView";
import HomeHeaderView from "./header/HomeHeaderView";
import HomeSelectionView from "./selection/HomeSelectionView";
import HomeSidebarEventModal from "./sidebar/event/HomeSidebarEventModal";
import HomeFeedView from "./feed/HomeFeedView";

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: moment(),
      event: null,
      search: "",
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
      event: null
    });
  }

  handleSearch(search) {
    this.setState({ search });
  }

  render() {
    return (
      <div className="HomeView">
        <div className={"column left" + (this.state.event !== null ? " inactive" : "")}>
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
        <div className={"column right" + (this.state.event !== null ? " active" : "")}>
          <HomeSidebarCalendar
            selectedDay={this.state.day}
            onSelectDay={this.handleSelectDay}
          />
          <HomeSidebarCategoriesView/>
          <HomeSidebarEventModal
            event={this.state.event}
          />
        </div>
      </div>
    );
  }
}

export default HomeView;
