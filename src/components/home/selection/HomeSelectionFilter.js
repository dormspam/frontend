import React, { Component } from "react";
import "./HomeSelectionFilter.css";

class HomeSelectionFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openContent: "Close",
      closedContent: "Select Categories",
      isOpen: false
    };

    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.switchFilter = this.switchFilter.bind(this);
  }

  handleCategorySelect(event) {
    // Don't do anything if the user clicked the checkbox
    if (event.target.tagName.toLowerCase() === "input") {
      return;
    }

    let checkbox = event.target.childNodes[0];
    checkbox.checked = !checkbox.checked;
  }

  switchFilter(event) {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let categories = ["Art", "Food", "Technology"];
    let categoryTags = categories.map((category, i) => (
      <button className="dropoption" key={i} index={i} onClick={this.handleCategorySelect}>
        <input type="checkbox" />
        &nbsp;&nbsp;&nbsp;{category}
      </button>
    ));

    return (
      <div className="HomeSelectionFilter">
        <div className="dropdown">
          <button className={"dropbutton" + (this.state.isOpen ? " active" : "")} onClick={this.switchFilter}>{this.state.isOpen ? this.state.openContent : this.state.closedContent}</button>
          <div className={"dropcontent" + (this.state.isOpen ? " show" : " hide")}>
            {categoryTags}
          </div>
        </div>
        <input className="search" type="text" name="search" placeholder="Filter by content, category, or author..."></input>
        <br />
      </div>
    );
  }
}

export default HomeSelectionFilter;
