import React, { Component } from "react";
import "./HomeFeedEventModal.css";

class HomeFeedEventModal extends Component {
  render() {
    if (this.props.event === null) {
      return null;
    }
    return (
      <div id={this.props.event.uid} class="HomeFeedEventModal">
      <img className="back" src="/img/x-button.svg" alt="Back" onClick={this.props.onSelectBack} />
          <h3>{this.props.event.sent_from}</h3>
          <div className="minipadding"></div>
          <h3>
            <span className="tags">&#9679; Tech</span>
            <span className="tags">&#9679; Art</span>
          </h3>
          <div className="padding"></div>
          <hr />
        <h2>{this.props.event.title}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.event.description}} />
      </div>
    );
  }
}

export default HomeFeedEventModal;