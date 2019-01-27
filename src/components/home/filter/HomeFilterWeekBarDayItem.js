import React, { Component } from "react";
import "./HomeFilterWeekBarDayItem.css";

class HomeFilterWeekBarDayItem extends Component {
  render() {
    return (
      <div className={"HomeFilterWeekBarDayItem" + (this.props.data.active ? " active" : "")}>
        <p className="weekday">{this.props.data.day}</p>
        <div className="circle">
          <p className="day">{this.props.data.date}</p>
        </div>
      </div>
    );
  }
}

export default HomeFilterWeekBarDayItem;
