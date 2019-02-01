import React, { Component } from "react";
import "./HomeSelectionView.css";

import HomeSelectionWeekBar from "./HomeSelectionWeekBar";
import HomeSelectionFilter from "./HomeSelectionFilter";

class HomeSelectionView extends Component {
  render() {
    return (
      <div className="HomeSelectionView">
        <HomeSelectionWeekBar
          selectedDay={this.props.selectedDay}
          onSelectDay={this.props.onSelectDay}
        />
        <HomeSelectionFilter onSearch={this.props.onSearch} />
      </div>
    );
  }
}

export default HomeSelectionView;
