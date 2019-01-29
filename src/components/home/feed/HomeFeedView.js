import React, { Component } from "react";
import "./HomeFeedView.css";

import HomeFeedEventView from "./HomeFeedEventView";

class HomeFeedView extends Component {
  constructor(props) {
    super(props);

    const mockData = [{
        id: 0,
        image: "https://hackmit.org/assets/graphics/hackcover7.png",
        title: "HackMIT",
        location: "Kresge Auditorium",
        time: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper quis tortor sit amet tempus. Vestibulum suscipit mi ante, ac pharetra elit cursus eget. Etiam mollis mollis euismod. Aliquam a arcu eget velit accumsan luctus non ac tellus. Sed vitae elementum felis, quis pretium tellus. Sed odio justo, viverra maximus ipsum ac, sodales bibendum mi. Pellentesque dui erat, vestibulum ut augue a, bibendum commodo orci."
      }, {
        id: 1,
        image: "https://hackmit.org/assets/graphics/hackcover7.png",
        title: "Hack Lodge",
        location: "Kresge Auditorium",
        time: 7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper quis tortor sit amet tempus. Vestibulum suscipit mi ante, ac pharetra elit cursus eget. Etiam mollis mollis euismod. Aliquam a arcu eget velit accumsan luctus non ac tellus. Sed vitae elementum felis, quis pretium tellus. Sed odio justo, viverra maximus ipsum ac, sodales bibendum mi. Pellentesque dui erat, vestibulum ut augue a, bibendum commodo orci."
      }, {
        id: 2,
        image: "http://www.mit.edu/~pax/images/2018finalists.jpg",
        title: "MIT Integration Bee",
        location: "Unknown",
        time: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper quis tortor sit amet tempus. Vestibulum suscipit mi ante, ac pharetra elit cursus eget. Etiam mollis mollis euismod. Aliquam a arcu eget velit accumsan luctus non ac tellus. Sed vitae elementum felis, quis pretium tellus. Sed odio justo, viverra maximus ipsum ac, sodales bibendum mi. Pellentesque dui erat, vestibulum ut augue a, bibendum commodo orci."
      }, {
        id: 3,
        image: "http://www.mit.edu/~pax/images/2018finalists.jpg",
        title: "Sleep Time",
        location: "East Campus",
        time: 7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper quis tortor sit amet tempus. Vestibulum suscipit mi ante, ac pharetra elit cursus eget. Etiam mollis mollis euismod. Aliquam a arcu eget velit accumsan luctus non ac tellus. Sed vitae elementum felis, quis pretium tellus. Sed odio justo, viverra maximus ipsum ac, sodales bibendum mi. Pellentesque dui erat, vestibulum ut augue a, bibendum commodo orci."
      }, {
        id: 4,
        image: "https://hackmit.org/assets/graphics/hackcover7.png",
        title: "Hack Lodge",
        location: "Kresge Auditorium",
        time: 7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper quis tortor sit amet tempus. Vestibulum suscipit mi ante, ac pharetra elit cursus eget. Etiam mollis mollis euismod. Aliquam a arcu eget velit accumsan luctus non ac tellus. Sed vitae elementum felis, quis pretium tellus. Sed odio justo, viverra maximus ipsum ac, sodales bibendum mi. Pellentesque dui erat, vestibulum ut augue a, bibendum commodo orci."
      }, {
        id: 5,
        image: "",
        title: "Bleep Bloop",
        location: ":)",
        time: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper quis tortor sit amet tempus. Vestibulum suscipit mi ante, ac pharetra elit cursus eget. Etiam mollis mollis euismod. Aliquam a arcu eget velit accumsan luctus non ac tellus. Sed vitae elementum felis, quis pretium tellus. Sed odio justo, viverra maximus ipsum ac, sodales bibendum mi. Pellentesque dui erat, vestibulum ut augue a, bibendum commodo orci."
      }, {
        id: 6,
        image: "https://i.imgur.com/mwHn1gK.jpg",
        title: "Chicken Wings",
        location: "Burton Conner",
        time: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper quis tortor sit amet tempus. Vestibulum suscipit mi ante, ac pharetra elit cursus eget. Etiam mollis mollis euismod. Aliquam a arcu eget velit accumsan luctus non ac tellus. Sed vitae elementum felis, quis pretium tellus. Sed odio justo, viverra maximus ipsum ac, sodales bibendum mi. Pellentesque dui erat, vestibulum ut augue a, bibendum commodo orci."
      }, {
        id: 7,
        image: "https://i.imgur.com/mwHn1gK.jpg",
        title: "Chicken Wings",
        location: "Burton Conner",
        time: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper quis tortor sit amet tempus. Vestibulum suscipit mi ante, ac pharetra elit cursus eget. Etiam mollis mollis euismod. Aliquam a arcu eget velit accumsan luctus non ac tellus. Sed vitae elementum felis, quis pretium tellus. Sed odio justo, viverra maximus ipsum ac, sodales bibendum mi. Pellentesque dui erat, vestibulum ut augue a, bibendum commodo orci."
      }];

    this.state = {
      data: mockData
    };

    this.organizeData = this.organizeData.bind(this);
    this.getAllEvents = this.getAllEvents.bind(this);
    this.getEventsByTime = this.getEventsByTime.bind(this);
  }

  organizeData() {
    let data = this.state.data.sort((a, b) => a.time - b.time);
    let formatted = {};

    for (let i = 0; i < data.length; i++) {
      if (data[i].time in formatted) {
        formatted[data[i].time].push(data[i]);
      } else {
        formatted[data[i].time] = [data[i]];
      }
    }

    return formatted;
  }

  getAllEvents() {
    let data = this.organizeData();
    let sortedTimes = Object.keys(data);
    let eventsDisplay = [];

    sortedTimes.sort();

    for (let i=0; i < sortedTimes.length; i++) {
      eventsDisplay.push(
        <div className="timeline" key={sortedTimes[i] * 1000 + i}>
          <div className="sideline">
            <div className="ball"></div>
          </div>
        </div>
      );

      eventsDisplay.push(
        <div className="onetime" key={-sortedTimes[i] * 1000 + i}>{sortedTimes[i]}</div>
      );

      eventsDisplay = eventsDisplay.concat(this.getEventsByTime(data[sortedTimes[i]]));
    }

    return eventsDisplay;
  }

  getEventsByTime(events) {
    let formatted = [];

    for (let i = 0; i < events.length; i++) {
      formatted.push(
        <div className="timeevents" key={events[i].id}>
          <div className="sidespace" />
          <HomeFeedEventView
            event={events[i]}
            selected={this.props.selectedEvent.id === events[i].id}
            onClick={this.props.onSelectEvent} />
        </div>
      );
    }

    return formatted;
  }

  render() {
    this.organizeData();

    return (
      <div className="HomeFeedView">
        {this.getAllEvents()}
      </div>
    );
  }
}

export default HomeFeedView;
