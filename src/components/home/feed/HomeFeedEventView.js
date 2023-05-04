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
    let dotTags = [];
    // TODO: implement dots
    for (let i=0; i < this.props.event.tags.length; i++) {
      dotTags.push(<span className="dots" style={{"color": this.props.colors[this.props.event.categories[i]]}} key={"dots-" + this.props.event.categories[i]}>&#9632;</span>);
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
