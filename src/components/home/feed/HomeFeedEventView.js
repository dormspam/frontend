import React, { Component } from "react";
import "./HomeFeedEventView.css";

class HomeFeedEventView extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.colors = {
      "OTHER": "#F7C8E0", // black
      "FOOD": "#FF0000", // red
      "CAREER": "#00FF00", // green
      "FUNDRAISING": "#0000FF", // blue
      "APPLICATION": "#d26400", // yellow
      "PERFORMANCE": "#FF00FF", // magenta
      "BOBA": "#00FFFF", // cyan
      "TALKS": "#800080" // purple
    }
  }

  handleClick() {
    this.props.onClick(this.props.event);
  }

  render() {
    let dotTags = [];
    // TODO: implement dots
    for (let i=0; i < this.props.event.tags.length; i++) {
      dotTags.push(<span className="dots" style={{"color": this.colors[this.props.event.tags[i]]}} key={"dots-" + this.props.event.tags[i]}>&#9632;</span>);
    }
    return (
      <div className={"HomeFeedEventView" + (this.props.selected ? " selected" : "")} style={this.props.selected ? {background: this.props.color} : {}} onClick={this.handleClick}>
        <h3 className="bold">{this.props.event.title}</h3>
        <p>{this.props.event.location} {dotTags}</p>
        <p className={"description" + (this.props.selected ? " selected" : "")}><br />{this.props.event.description_text}</p>
      </div>
    );
  }
}

export default HomeFeedEventView;
