import React, { Component } from "react";
import "./HomeSidebarEventModal.css";

class HomeSidebarEventModal extends Component {
  render() {
    return (
      <div className={"HomeSidebarEventModal" + (this.props.event.id === -1 ? " hidden" : "")}>
        <img className={this.props.event.image === "" ? " hidden" : ""} src={this.props.event.image} alt="Event promotional material" />
        <h2>{this.props.event.title}</h2>
        <p>{this.props.event.description}</p>
      </div>
    );
  }
}

export default HomeSidebarEventModal;
