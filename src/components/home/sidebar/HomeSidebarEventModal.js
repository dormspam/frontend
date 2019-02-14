import React, { Component } from "react";
import "./HomeSidebarEventModal.css";

class HomeSidebarEventModal extends Component {
  render() {
    let categories = ["Tech", "Food"];
    if (this.props.event === null) {
      return <div />;
    }

    return (
      <div className="HomeSidebarEventModal">
        <div className="metadata-top">
          <h3>{this.props.event.sent_from}</h3>
          <div className="minipadding"></div>
          <h3>
            <span className="tags">&#9679; Tech</span>
            <span className="tags">&#9679; Art</span>
          </h3>
          <div className="padding"></div>
          <hr />
        </div>

        <h2>{this.props.event.title}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.event.description}} />
      </div>
    );
  }
}

export default HomeSidebarEventModal;
