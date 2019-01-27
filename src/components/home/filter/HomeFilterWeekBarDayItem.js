import React, { Component } from "react";
import "./HomeFilterWeekBarDayItem.css";

class HomeFilterWeekBarDayItem extends Component {
  render() {
    return (
      <div className="HomeFilterWeekBarDayItem">
        <p className="weekday">S</p>
        <div className="circle">
          <p className="day">5</p>
        </div>
      </div>
    );
  }
}

export default HomeFilterWeekBarDayItem;
