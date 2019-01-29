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

    this.switchFilter = this.switchFilter.bind(this);
  }

  switchFilter() {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false
      });
    } else {
      this.setState({
        isOpen: true
      });
    }
  }

  render() {
    return (
      <div className="HomeSelectionFilter">
        <div className="dropdown">
          <button className={"dropbutton" + (this.state.isOpen ? " active" : "")} onClick={this.switchFilter}>{this.state.isOpen ? this.state.openContent : this.state.closedContent}</button>
          <div className={"dropcontent" + (this.state.isOpen ? " show" : " hide")}>
            <button className="dropoption">
              <input type="checkbox" name="vehicle1" value="Bike" />
              &nbsp;&nbsp;&nbsp;Art
            </button>
            <button className="dropoption">
              <input type="checkbox" name="vehicle1" value="Bike" />
              &nbsp;&nbsp;&nbsp;Food
            </button>
            <button className="dropoption">
              <input type="checkbox" name="vehicle1" value="Bike" />
              &nbsp;&nbsp;&nbsp;Technology
            </button>
          </div>
        </div>
        <input className="search" type="text" name="search" placeholder="Filter by content, category, or author..."></input>
        <br />
      </div>
    );
  }
}

export default HomeSelectionFilter;
