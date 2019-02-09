import React, { Component } from "react";
import "./HomeSidebarCategoriesView.css";

export default class HomeSidebarCategoriesView extends Component {
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
    };

  }

  render() {
    let categoryTags = this.state.categories.map((category, i) => (
      <div className="category" key={i} index={i}>
        <input type="checkbox" />
        <div className="text">
          <h3>{category.name}</h3>
        </div>
      </div>
    ));

    return (
      <div className="HomeSidebarCategoriesView">
        {categoryTags}
      </div>
    );
  }
}
