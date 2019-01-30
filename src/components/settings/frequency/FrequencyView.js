import React, { Component } from "react";
import axios from "axios";
import "./FrequencyView.css";

class FrequencyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      frequency: this.props.user.settings.frequency
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {
    this.setState({
      frequency: parseInt(event.target.value, 10)
    });
  }

  handleSave() {
    const self = this;

    axios.put("https://dormspam-calendar.herokuapp.com/users/current", {
      frequency: parseInt(this.state.frequency, 10)
    }, {
      withCredentials: true
    }).then(response => {
      self.props.onUserUpdate(response.data);
    });
  }

  render() {
    let selectOptions = [1, 2, 3, 5, 7];
    let optionTags = selectOptions.map(frequency => (
      <option key={frequency}>{frequency}</option>
    ));

    return (
      <div className={"FrequencyView" + (this.props.hidden ? " hidden" : "")}>
        <div className="container">
          <h1>How often do you want your digest?</h1>
          <div className="line">
            <p>Once every</p>
            <label class="custom-select">
              <select defaultValue={this.state.frequency} onChange={this.handleChange}>
                {optionTags}
              </select>
            </label>

            <p>{this.state.frequency === 1 ? "day" : "days"}</p>
            <button className="btn-freq" onClick={this.handleSave}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FrequencyView;
