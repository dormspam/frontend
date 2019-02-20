import React, { Component } from "react";

import Events from "../../api/events";
import HomeSidebarEventModal from "../../components/home/sidebar/event/HomeSidebarEventModal";

class EventView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: null
    };

    const self = this;

    Events.getEventById(props.match.params.id).then(response => {
      self.setState({
        event: response.data
      });
    });
  }

  render() {
    if (this.state.event === null) {
      return <div />;
    }

    return <HomeSidebarEventModal event={this.state.event} />;
  }
}

export default EventView;
