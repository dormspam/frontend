import React, { Component } from "react";
import Users from "../../../api/users";
import Categories from "../../../api/categories";
import axios from "axios";
import "./PreferencesView.css";

class PreferencesView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      preferences: props.user.settings.preferences,
      colors: {}
    };

    this.saveCategories = this.saveCategories.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSave = this.handleSave.bind(this);

    const self = this;

    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/categories")
      .then(res => {
        self.saveCategories(res.data);
      });

    Categories.getCategories().then(response => {
      let tempColors = {};
      for (let i = 0; i < response.data.length; i++) {
        tempColors[response.data[i].name] = response.data[i]["color"];
      }
      this.setState({
        colors: tempColors
      });
    });
  }

  saveCategories(categories) {
    this.setState({
      categories: categories
    });
  }

  handleCategoryClick(event) {
    // Don't do anything if the user clicked the checkbox
    if (event.target.tagName.toLowerCase() === "input") {
      return;
    }

    // Find the parent "category" div
    let target = null;

    if (event.target.classList.contains("category")) {
      target = event.target;
    } else if (event.target.parentElement.parentElement.classList.contains("category")) {
      target = event.target.parentElement.parentElement;
    }

    // Update the category's state
    let category = this.state.categories[target.getAttribute("index")].id;
    this.toggleCategory(category);
  }

  handleCheck(event) {
    let category = this.state.categories[event.target.parentElement.getAttribute("index")].id;
    this.toggleCategory(category);
  }

  toggleCategory(category) {
    let preferences = this.state.preferences;

    if (preferences.includes(category)) {
      preferences.splice(preferences.indexOf(category), 1);
    } else {
      preferences.push(category);
    }

    this.setState({
      preferences: preferences
    });
  }

  handleSave() {
    const self = this;

    Users.updateCurrentUser({
      preferences: this.state.preferences
    }).then(response => {
      self.props.onUserUpdate(response.data);
    });
  }

  render() {
    let categoryTags = this.state.categories.map((category, i) => (
      <div className="category"
          key={i}
          index={i}
          onClick={this.handleCategoryClick}
          style={{"borderLeft": "3px solid " + this.state.colors[category.name]}}>
        <input type="checkbox" checked={this.state.preferences.includes(category.id)} onChange={this.handleCheck} />
        <div className="text">
          <h3>{category.name}</h3>
          <p>{category.description}</p>
        </div>
      </div>
    ));

    return (
      <div className={"PreferencesView" + (this.props.hidden ? " hidden" : "")}>
        <div className="container">
          <h1>Select your digest preferences</h1>
          {categoryTags}
          <button className="btn-pref" onClick={this.handleSave}>Save</button>
        </div>
      </div>
    );
  }
}

export default PreferencesView;
