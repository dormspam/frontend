import React, { Component } from "react";
import "./HomeFeedEventModal.css";

class HomeFeedEventModal extends Component {
  render() {
    return (
      <div className={"HomeFeedEventModal" + (this.props.event.id === -1 ? " hidden" : "")}>
        <img alt="Event banner" src={this.props.event.image} />
        <h2>{this.props.event.name}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper quis tortor sit amet tempus. Vestibulum suscipit mi ante, ac pharetra elit cursus eget. Etiam mollis mollis euismod. Aliquam a arcu eget velit accumsan luctus non ac tellus. Sed vitae elementum felis, quis pretium tellus. Sed odio justo, viverra maximus ipsum ac, sodales bibendum mi. Pellentesque dui erat, vestibulum ut augue a, bibendum commodo orci.</p>
      </div>
    );
  }
}

export default HomeFeedEventModal;
