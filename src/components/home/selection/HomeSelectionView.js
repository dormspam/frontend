import React, { Component } from "react";
import "./HomeSelectionView.css";

import HomeSelectionWeekBar from "./HomeSelectionWeekBar";
import HomeSelectionFilter from "./HomeSelectionFilter";

class HomeSelectionView extends Component {
  render() {
    return (
      <div className="HomeSelectionView">
        <HomeSelectionWeekBar onDateUpdate={this.props.onDateUpdate} />
        <HomeSelectionFilter />
      </div>
    );
  }
}

export default HomeSelectionView;
