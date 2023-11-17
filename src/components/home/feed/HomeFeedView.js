import React, { Component } from "react";
import moment from "moment";

import Categories from "../../../api/categories";
import Events from "../../../api/events";
import HomeFeedEventView from "./HomeFeedEventView";
import "./HomeFeedView.css";
import LocalData from "../../../api/localdata";

class HomeFeedView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchCount: 0,
      searching: false,
      colors: Categories.getCategoriesColorMapping()
    };

    this.saveEventData = this.saveEventData.bind(this);
    this.parseCategories = this.parseCategories.bind(this);
    const self = this;

    Events.getEventsByDate(moment().format("YYYY-MM-DD")).then(response => {
      self.saveEventData(response);
    });

    // Categories.getCategoriesColorMapping().then(response => {
    //   let tempColors = {};
    //   for (let i = 0; i < response.data.length; i++) {
    //     tempColors[response.data[i].name] = response.data[i]["color"];
    //   }
    //   this.setState({
    //     colors: tempColors
    //   });
    // });
  }

  componentWillReceiveProps(nextProps) {
    const self = this;
    const searching = nextProps.search.length > 0;
    const searchCount = this.state.searchCount + 1;

    if (searching) {
      // filter based on title
      // make axios request here for search
      // Events.getEventsByQuery(nextProps.search).then(response => {
      //   if (searchCount < self.state.searchCount) {
      //     return;
      //   }

      //   self.saveEventData(response.data);
      // });
    } else {
      Events.getEventsByDate(nextProps.selectedDay.format("YYYY-MM-DD")).then(response => {
        if (searchCount < self.state.searchCount) {
          return;
        }
        self.saveEventData(response);
      });
    }

    this.setState({
      searchCount: searchCount,
      searching: searching
    });
  }
  saveEventData(eventData) {
    eventData.events.forEach((event, index) => {
      if (eventData.tags[index]) {
        const event_tags = eventData.tags[index]; //Name of categories associated with the event
        event.tags = event_tags;
        event.user_email = eventData.users[index]; //Email of the user who sent/submitted the event
        event.description = eventData.descriptions[index]; //Plaintext email description
        event.description_html = eventData.descriptions_html[index]; //HTML email description
      }
    });

    //Getting a integer representation of the categories the user has selected since event.tags is a list of ints
    let current_categories = Categories.getCategoriesIntMapping(LocalData.getCategoryFilters());

    //Creating a new list matchingEvents that contains events that have categories matching with the categories the user has selected
    const matchingEvents = eventData.events.filter((event) => {

      //Creating a list of current_categories(categories that user wants to be shown) that are also in the event tags the event has
      let matching_categories = current_categories.filter(cat => event.tags.includes(cat));

      //If this list has an element, adding the event to the list of matchingEvents
      return matching_categories.length > 0;
    })

    const events = matchingEvents;

    let times = [];

    let data = events.sort((a, b) => {
      let aTime = moment(a.start_time).valueOf();
      let bTime = moment(b.start_time).valueOf();

      if (aTime > bTime) {
        return 1;
      } else if (aTime < bTime) {
        return -1
      }

      return 0;
    });


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
    for (var j = 0; j < data.length; j++) {
      data[j].tags = this.parseCategories(data[j].tags);
    }

    // let filteredTimes = [];
    //
    // for (var k=0; k < times.length; k++) {
    //   for (var l=0; l < times[k][0].tags.length; l++) {
    //     if (this.props.categories.indexOf(times[k][0].tags[l]) >= 0) {
    //       filteredTimes.push(times[k]);
    //       break;
    //     }
    //   }
    // }

    this.setState({
      data: times
    });
  }

  // parseCategories(categories) {
  //   categories = categories.substring(1, categories.length - 1);
  //   let listed = categories.split(",");
  //   for (let i=0; i < listed.length; i++) {
  //     listed[i] = listed[i].replace(/"/g, "");
  //   }
  //   return listed;
  // }

  parseCategories(categories) {
    const tags = Categories.getCategoriesList();
    return categories.map(category => tags[category]);
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
      let timeString = moment(`${this.state.data[i][0].start_date}T${this.state.data[i][0].start_time}`)
      timeString = timeString.format("h:mm a");

      // if (this.state.searching) {
      //   timeString = moment(this.state.data[i][0].start_time).format("MMMM Do YYYY, h:mm a");
      // }

      elements.push(
        <div className="onetime" key={"times" + i + "2"}>{timeString}</div>
      );
      for (var j = 0; j < this.state.data[i].length; j++) {
        let selected = false;

        if (this.props.selectedEvent !== null) {
          selected = this.props.selectedEvent.id === this.state.data[i][j].id;
        }


        elements.push(
          <div className="timeevents" key={this.state.data[i][j].id}>
            <div className="sidespace" />
            <HomeFeedEventView
              event={this.state.data[i][j]}
              selected={selected}
              onClick={this.props.onSelectEvent}
              colors={this.state.colors} />
          </div>
        );
      }
    }

    if (elements.length === 0) {
      elements = <div className="empty-events">
        <img className="empty-events-icon" src="img/empty.png" />
        <h1 className="empty-events-label">No events found!</h1>
      </div>
    }

    return (
      <div className="HomeFeedView">
        {elements}
      </div>
    );
  }
}

export default HomeFeedView;