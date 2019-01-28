import React, { Component } from "react";
import "./PreferencesView.css";

class PreferencesView extends Component {
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

    // Update the checkbox state
    const checkbox = target.childNodes[0];
    checkbox.checked = !checkbox.checked;
  }

  render() {
    let categories = [
      {
        name: "Technology",
        description: "Computer science, hackathons, and everything in between"
      },
      {
        name: "Lectures",
        description: "Talks and short classes about anything you can imagine!"
      },
      {
        name: "Academic Events",
        description: "Events held by MIT students and for MIT students, focused on academics"
      },
      {
        name: "Performance Groups",
        description: "Dance, music, a capella, and other concerts and performances"
      },
      {
        name: "Social Events",
        description: "Parties, karaoke nights, and food-related outings"
      }
    ];

    let categoryTags = categories.map((category, i) => (
      <div className="category" key={i} onClick={this.handleCategoryClick}>
        <input type="checkbox" />
        <div className="text">
          <h3>{category.name}</h3>
          <p>{category.description}</p>
        </div>
      </div>
    ))

    return (
      <div className="PreferencesView">
        <div className="container">
          <h1>Select your preferences</h1>
          {categoryTags}
          <button>Save</button>
        </div>
      </div>
    );
  }
}

export default PreferencesView;
