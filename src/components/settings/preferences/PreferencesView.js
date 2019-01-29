import React, { Component } from "react";
import axios from "axios";
import "./PreferencesView.css";

class PreferencesView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          name: "Technology",
          id: "technology",
          description: "Computer science, hackathons, and everything in between"
        },
        {
          name: "Lectures",
          id: "lectures",
          description: "Talks and short classes about anything you can imagine!"
        },
        {
          name: "Academic Events",
          id: "academic",
          description: "Events held by MIT students and for MIT students, focused on academics"
        },
        {
          name: "Performance Groups",
          id: "performance",
          description: "Dance, music, a capella, and other concerts and performances"
        },
        {
          name: "Social Events",
          id: "social",
          description: "Parties, karaoke nights, and food-related outings"
        }
      ],
      preferences: props.user.settings.preferences
    };

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSave = this.handleSave.bind(this);
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

    axios.put("http://localhost.localdomain:5000/users/current", {
      preferences: this.state.preferences
    }, {
      withCredentials: true
    }).then(response => {
      self.props.onUserUpdate(response.data);
    });
  }

  render() {
    let categoryTags = this.state.categories.map((category, i) => (
      <div className="category" key={i} index={i} onClick={this.handleCategoryClick}>
        <input type="checkbox" checked={this.state.preferences.includes(category.id)} onChange={this.handleCheck} />
        <div className="text">
          <h3>{category.name}</h3>
          <p>{category.description}</p>
        </div>
      </div>
    ))

    return (
      <div className={"PreferencesView" + (this.props.hidden ? " hidden" : "")}>
        <div className="container">
          <h1>Select your preferences</h1>
          {categoryTags}
          <button onClick={this.handleSave}>Save</button>
        </div>
      </div>
    );
  }
}

export default PreferencesView;
