import React, { Component } from "react";
import "./HomeFeedEventView.css";
import Categories from "../../../api/categories";
class HomeFeedEventView extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.colors = Categories.getCategoriesColorMapping();
    // this.colors = {
    //   "OTHER": "#F7C8E0", // black
    //   "FOOD": "#FF0000", // red
    //   "CAREER": "#00FF00", // green
    //   "FUNDRAISING": "#0000FF", // blue
    //   "APPLICATION": "#d26400", // yellow
    //   "PERFORMANCE": "#FF00FF", // magenta
    //   "BOBA": "#00FFFF", // cyan
    //   "TALKS": "#800080" // purple
    // }
  }

  handleClick() {
    this.props.onClick(this.props.event);
  }

  render() {
    let dotTags = [];
    let rsvp_tag = "";
    let color;
    let RSVP = null;
    if (this.props.event.tags.includes('RSVP')) {
      rsvp_tag = "RSVP";
      color = Categories.getCategoriesColorMapping()["RSVP"];
      RSVP = <h3 style={{ borderColor: color, color: color }}>{rsvp_tag}</h3>;
    }
    // TODO: implement dots
    for (let i = 0; i < this.props.event.tags.length; i++) {
      dotTags.push(<span className="dots" style={{ "color": this.colors[this.props.event.tags[i]] }} key={"dots-" + this.props.event.tags[i]}>&#9632;</span>);
    }

    return (
      <div className={"HomeFeedEventView" + (this.props.selected ? " selected" : "")} style={this.props.selected ? { background: this.props.color } : {}} onClick={this.handleClick}>
        <div className="left">
          <h3 className="bold">{this.props.event.title}</h3>
          <p><br></br>{this.props.event.location}</p>
        </div>
        <div className="right">
          {RSVP}
          <p><br></br>{dotTags}</p>
        </div>
      </div >
    )

  }
}

export default HomeFeedEventView;
