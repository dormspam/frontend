import React, { Component } from "react";
import moment from "moment";
import "./HomeFilterView.css";

import HomeFilterWeekBar from "./HomeFilterWeekBar";

class HomeFilterView extends Component {
  render() {
    const weekDay = moment().format("dddd");
    const date = moment().format("MMMM D");

    return (
      <div className="HomeFilterView">
<<<<<<< HEAD
        <h1>
          <span className="bold">Tuesday, </span>
          February 5
        </h1>
=======
        <h1><strong>{weekDay}</strong>, {date}</h1>
>>>>>>> a1c123893dee7fdc20a908be6c7f6369b25a6a90
        <HomeFilterWeekBar />
      </div>
    );
  }
}

export default HomeFilterView;
