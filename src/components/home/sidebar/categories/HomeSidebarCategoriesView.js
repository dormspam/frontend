import React, { Component } from "react";

import Categories from "../../../../api/categories";
import Users from "../../../../api/users";
import "./HomeSidebarCategoriesView.css";

export default class HomeSidebarCategoriesView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      filters: props.user.settings.filters
    };

    Categories.getCategories().then(response => {
      const tempFilters = response.data.map(x => x.name);

      this.setState({
        categories: response.data,
        filters: tempFilters
      });

      this.props.onCategoryUpdate(tempFilters);
    });

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
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
    let category = this.state.categories[target.getAttribute("index")].name;
    this.toggleCategory(category);
  }

  handleCheck(event) {
    let category = this.state.categories[event.target.parentElement.getAttribute("index")].name;
    this.toggleCategory(category);
  }

  toggleCategory(category) {
    let filters = this.state.filters;

    if (filters.includes(category)) {
      filters.splice(filters.indexOf(category), 1);
    } else {
      filters.push(category);
    }

    this.setState({
      filters: filters
    });

    this.props.onCategoryUpdate(filters);

    this.handleSave();
  }

  handleSave() {
    Users.updateCurrentUser({
      filters: this.state.filters
    }).then(response => {
      this.props.onUserUpdate(response.data);
    });
  }

  render() {
    let categoryTags = this.state.categories.map((category, i) => (
      <div
          className={"category"}
          key={i}
          index={i}
          onClick={this.handleCategoryClick}
          style={(this.state.filters.includes(category.name) ? {"color": category.color,
                  "borderLeft": "3px solid " + category.color} : {"color": "#CFCFCF",
                  "borderLeft": "3px solid #CFCFCF"})}>
        <input type="checkbox" checked={this.state.filters.includes(category.name)} onChange={this.handleCheck} />
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
