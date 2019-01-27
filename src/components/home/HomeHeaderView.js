import React, { Component } from "react";

import HomeHeaderCalendar from "./header/HomeHeaderCalendar";

class HomeHeaderView extends Component {
  render() {
    return (
      <div className="HomeHeaderView">
        <HomeHeaderCalendar />
      </div>
    );
  }
}

export default HomeHeaderView;
