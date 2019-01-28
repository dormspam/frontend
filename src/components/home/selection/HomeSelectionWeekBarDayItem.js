import React, { Component } from "react";
import "./HomeSelectionWeekBarDayItem.css";

class HomeSelectionWeekBarDayItem extends Component {
  render() {
    return (
      <div className={"HomeSelectionWeekBarDayItem" + (this.props.data.active ? " active" : "")}>
        <p className="weekday">{this.props.data.day}</p>
        <div className="circle">
          <p className="day">{this.props.data.date}</p>
        </div>
      </div>
    );
  }
}

export default HomeSelectionWeekBarDayItem;
