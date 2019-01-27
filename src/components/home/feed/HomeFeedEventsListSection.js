import React, { Component } from "react";
import "./HomeFeedEventsListSection.css";

import HomeFeedEventView from "./HomeFeedEventView";

class HomeFeedEventsListSection extends Component {
  render() {
    const hackmit = {
      id: 1,
      image: "https://hackmit.org/assets/graphics/hackcover7.png",
      name: "HackMIT",
      location: "Kresge Auditorium"
    };

    const integrationbee = {
      id: 2,
      image: "http://www.mit.edu/~pax/images/2018finalists.jpg",
      name: "MIT Integration Bee",
      location: "Unknown"
    };

    const bigpie = {
      id: 3,
      image: "https://i.imgur.com/mwHn1gK.jpg",
      name: "Big Peach Pie",
      location: "East Campus"
    };

    const events = [hackmit, integrationbee, bigpie];
    const eventTags = events.map(
      event => <HomeFeedEventView
                  event={event}
                  selected={this.props.selectedEvent.id === event.id}
                  onClick={this.props.onSelectEvent} />
    )

    return (
      <div className="HomeFeedEventsListSection">
        <h2>Tuesday 6:00pm</h2>
        {eventTags}
      </div>
    );
  }
}

export default HomeFeedEventsListSection;
