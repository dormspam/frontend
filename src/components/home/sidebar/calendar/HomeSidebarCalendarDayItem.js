import React, { Component } from "react";
import "./HomeSidebarCalendarDayItem.css";

export default class HomeSidebarCalendarDayItem extends Component {
  render() {
    return (
      <div className={"HomeSidebarCalendarDayItem" + (this.props.active ? " active" : "") + (this.props.focus ? " focus" : "") + (this.props.isToday ? " today" : "")} moment={this.props.moment} onClick={this.props.onClick}>
        <div className="circle">
          <p className="day">{this.props.day}</p>
        </div>
      </div>
    );
  }
}