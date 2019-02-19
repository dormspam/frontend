import React, { Component } from "react";
import "./HomeSidebarCalendarDayItem.css";

export default class HomeSidebarCalendarDayItem extends Component {
	constructor(props) {
		super(props);

		this.getDayTags = this.getDayTags.bind(this);
	}

	getDayTags() {
		let frequencies = this.props.frequencies;
		let frequenciesSorted = Object.keys(frequencies).sort(function(a,b){return frequencies[b]-frequencies[a]});

		let tagData = [];
		if (this.props.focus) {
			for (let i=0; i < 3; i++) {
	  		if (frequencies[frequenciesSorted[i]] > 0) {
		  		tagData.push(<span
		  			className="tags"
		  			style={{color: this.props.colors[frequenciesSorted[i]]}}
		  			key={"tag-" + frequenciesSorted[i]}>
		  			&#9679;
		  			</span>);
	  		}
			}
		}

		return tagData;
	}

	render() {
		let tagData = this.getDayTags();
		return (
		  <div className={"HomeSidebarCalendarDayItem" + (this.props.active ? " active" : "") + (this.props.focus ? " focus" : "") + (this.props.isToday ? " today" : "")} moment={this.props.moment} onClick={this.props.onClick}>
		    <div className="circle">
		      <p className="day">{this.props.day}
		      	<br />
		      	{tagData}
		      </p>
		    </div>
		  </div>
		);
	}
}
