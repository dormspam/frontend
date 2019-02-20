import React, { Component } from "react";

import "./HomeSelectionWeekBarDayItem.css";

class HomeSelectionWeekBarDayItem extends Component {
  render() {
    return (
      <div className={"HomeSelectionWeekBarDayItem" + (this.props.data.isToday ? " today" : "") + (this.props.data.active ? " active" : "")} index={this.props.data.index} onClick={this.props.onClick}>
        <p className="weekday">{this.props.data.day}</p>
        <div className="circle">
          <p className="day">{this.props.data.date}</p>
        </div>
      </div>
    );
  }
}

export default HomeSelectionWeekBarDayItem;
