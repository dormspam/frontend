import React, { Component } from "react";
import "./HomeSelectionFilter.css";

class HomeSelectionFilter extends Component {
  render() {
    return (
      <div className="HomeSelectionFilter">
        <div className="dropdown">
          <button className="dropbutton active">CLOSE</button>
          <div className="dropcontent show">
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
        <input className="search" type="text" name="search" placeholder="search by"></input>
        <br />
      </div>
    );
  }
}

export default HomeSelectionFilter;
