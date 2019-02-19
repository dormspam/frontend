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
      <div className={"HomeFeedEventView" + (this.props.selected ? " selected" : "")} style={this.props.selected ? {background: this.props.color} : {}} onClick={this.handleClick}>
        <h3 className="bold">{this.props.event.name}</h3>
        <p>{this.props.event.location}</p>
        <p className={"description" + (this.props.selected ? " selected" : "")}><br />{this.props.event.description_text}</p>
      </div>
    );
  }
}

export default HomeFeedEventView;
