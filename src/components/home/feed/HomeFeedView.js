import React, { Component } from "react";
import "./HomeFeedView.css";

import HomeFeedEventModal from "./HomeFeedEventModal";
import HomeFeedEventsList from "./HomeFeedEventsList";
import HomeFeedTimelineView from "./HomeFeedTimelineView";

class HomeFeedView extends Component {
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
      <div className="HomeFeedView">
        <HomeFeedTimelineView />
        <HomeFeedEventsList expanded={this.state.event.id === -1} selectedEvent={this.state.event} onSelectEvent={this.handleSelectEvent} />
        <HomeFeedEventModal event={this.state.event} expanded={this.state.event.id !== -1} />
      </div>
    );
  }
}

export default HomeFeedView;
