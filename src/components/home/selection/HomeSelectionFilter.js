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
    this.handleChange = this.handleChange.bind(this);
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
  handleChange(event) {
    this.props.onSearch(event.target.value);
  }
  render() {
    return (
      <div className="HomeSelectionFilter">
        <div className="icon">
          <img src="/img/search.svg" alt="Search" />
        </div>
        <input
          className="search"
          type="text"
          name="search"
          placeholder="Search for substring"
          onChange={this.handleChange}
        />
        <br />
      </div>
    );
  }
}

export default HomeSelectionFilter;
