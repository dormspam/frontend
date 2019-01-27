import React, { Component } from "react";
import "./HomeHeaderCalendarDayItem.css";

class HomeHeaderCalendarDayItem extends Component {
  render() {
    return (
      // <div className={"HomeHeaderCalendarDayItem" + (this.props.data.active ? " active" : "")}>
      <div className="HomeHeaderCalendarDayItem">
        <div className="circle">
          {/* <p className="day">{this.props.data.date}</p> */}
          <p className="day">10</p>
        </div>
      </div>
    );
  }
}

export default HomeHeaderCalendarDayItem;
