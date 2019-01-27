import React, { Component } from "react";
import "./HomeFeedEventView.css";

class HomeFeedEventView extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.event);
  }

  render() {
    return (
      <div className={"HomeFeedEventView" + (this.props.selected ? " selected" : "")} onClick={this.handleClick}>
        <h3>{this.props.event.name}</h3>
        <span>{this.props.event.location}</span>
      </div>
    )
  }
}

export default HomeFeedEventView;
