import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import "./HomeView.css";

import HomeSidebarCalendar from "./sidebar/calendar/HomeSidebarCalendar";
import HomeSidebarCategoriesView from "./sidebar/categories/HomeSidebarCategoriesView";
import HomeHeaderView from "./header/HomeHeaderView";
import HomeSelectionView from "./selection/HomeSelectionView";
import HomeSidebarEventModal from "./sidebar/event/HomeSidebarEventModal";
import HomeFeedView from "./feed/HomeFeedView";
import HomeFeedEventModal from "./feed/HomeFeedEventModal";

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: moment(),
      event: null,
      search: "",
      user: { settings: { filters: [] }}
    };

    axios.get(process.env.REACT_APP_BACKEND_URL + "/users/current", {
      withCredentials: true
    }).then(response => {
      this.setState({
        user: response.data
      });
    });

    this.handleSelectEvent = this.handleSelectEvent.bind(this);
    this.handleSelectDay = this.handleSelectDay.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
  }

  handleSelectEvent(event) {
    if (this.state.event !== null && this.state.event.uid === event.uid) {
      document.getElementsByClassName("column left")[0].removeEventListener('click', this.handleClickAway, false);
      this.setState({
        event: null
      });
    } else {
      document.getElementsByClassName("column left")[0].addEventListener('click', this.handleClickAway, false);
      this.setState({ event });
    }
  }

  handleSelectDay(m) {
    this.setState({
      day: m,
      event: null
    });
  }

  handleClickAway(event) {
    document.getElementsByClassName("column left")[0].removeEventListener('click', this.handleClickAway, false);
    this.setState({
      event: null
    });
  }

  handleSearch(search) {
    this.setState({ search });
  }

  handleUserUpdate(data) {
    this.setState({
      user: data
    });
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
        <div className="modal">
            <HomeFeedEventModal
              event={this.state.event}
              onSelectBack={this.handleClickAway}
            />
        </div>
        <div className={"column right" + (this.state.event !== null ? " active" : "")}>
          <HomeSidebarCalendar
            selectedDay={this.state.day}
            onSelectDay={this.handleSelectDay}
          />
          <HomeSidebarCategoriesView
            onUserUpdate={this.handleUserUpdate}
            user={this.state.user}
          />
          <HomeSidebarEventModal
            onSelectBack={this.handleClickAway}
            event={this.state.event}
          />
        </div>
      </div>
    );
  }
}

export default HomeView;
