import React, { Component } from "react";
import "./HomeSidebarCalendarDayItem.css";

export default class HomeSidebarCalendarDayItem extends Component {
	constructor(props) {
		super(props);

		this.getDayTags = this.getDayTags.bind(this);
	}

	getDayTags() {
		let frequencies = this.props.frequencies;
		let frequenciesFiltered = {};
		for (var key in frequencies) {
			if (this.props.categories.indexOf(key) > -1) {
				frequenciesFiltered[key] = frequencies[key];
			}
		}
		let frequenciesSorted = Object.keys(frequenciesFiltered).sort(function(a,b){return frequencies[b]-frequencies[a]});

		let tagData = [];
		if (this.props.focus) {
			for (let i=0; i < 2; i++) {
		  		if (frequenciesSorted.length > i && frequencies[frequenciesSorted[i]] > 0) {
			  		tagData.push(<span
			  			className="tags"
			  			style={{color: this.props.colors[frequenciesSorted[i]]}}
			  			key={"tag-" + frequenciesSorted[i]}>
			  			&#9632;
			  			</span>);
		  		}
			}
		}

		return tagData;
	}

	render() {
		let tagData = this.getDayTags();
		return (
		  <div className={"HomeSidebarCalendarDayItem" + (this.props.active ? " active" : "") + (this.props.focus ? " focus" : "") + (this.props.isToday ? " today" : "") + (this.props.hasEvent ? " hasEvent" : "")} moment={this.props.moment} onClick={this.props.onClick}>
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
