import React, { Component } from "react";
import "./HomeSidebarCalendarDayItem.css";

class HomeSidebarCalendarDayItem extends Component {
  render() {
    return (
      // <div className={"HomeSidebarCalendarDayItem" + (this.props.data.active ? " active" : "")}>
      <div className="HomeSidebarCalendarDayItem">
        <div className="circle">
          {/* <p className="day">{this.props.data.date}</p> */}
          <p className="day">10</p>
        </div>
      </div>
    );
  }
}

export default HomeSidebarCalendarDayItem;
