import React, { Component } from "react";
import "./HomeSidebarEventModal.css";

class HomeSidebarEventModal extends Component {
  render() {
    if (this.props.event === null) {
      return <div />;
    }

    return (
      <div className="HomeSidebarEventModal">
        <h2>{this.props.event.title}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.event.description}} />
      </div>
    );
  }
}

export default HomeSidebarEventModal;
