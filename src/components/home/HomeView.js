import React, { Component } from "react";
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
          <HomeSelectionView />
          <HomeFeedView selectedEvent={this.state.event} onSelectEvent={this.handleSelectEvent} />
        </div>
        <div className="column right">
          <HomeSidebarCalendar />
          <HomeSidebarEventModal event={this.state.event} />
        </div>
      </div>
    );
  }
}

export default HomeView;
