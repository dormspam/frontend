import React, { Component } from "react";
import "./HomeSidebarCalendarDayItem.css";

export default class HomeSidebarCalendarDayItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			colors: {
				"Boba": "#F6B957",
				"Food": "#EE6F6F",
				"Tech": "#A16EE5",
				"EECS-jobs-announce": "#5A56EF",
				"Recruiting": "#459AF6",
				"Social": "#25C8D3",
				"Performance Groups": "#12DAA4",
				"Talks": "#73F23A",
				"Other": "#D8D8D8"
			}
		}

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
		  			style={{color: this.state.colors[frequenciesSorted[i]]}}
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
