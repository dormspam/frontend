import React, { Component } from "react";
import axios from "axios";
import "./HomeSidebarCategoriesView.css";

export default class HomeSidebarCategoriesView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      filters: props.user.settings.filters
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
    let filters = this.state.filters;

    if (filters.includes(category)) {
      filters.splice(filters.indexOf(category), 1);
    } else {
      filters.push(category);
    }

    this.setState({
      filters: filters
    });

    this.handleSave();
  }

  handleSave() {
    const self = this;

    axios.put(process.env.REACT_APP_BACKEND_URL + "/users/current", {
      filters: this.state.filters
    }, {
      withCredentials: true
    }).then(response => {
      self.props.onUserUpdate(response.data);
    });
  }

  render() {
    let categoryTags = this.state.categories.map((category, i) => (
      <div className="category" key={i} index={i} onClick={this.handleCategoryClick}>
        <input type="checkbox" checked={this.state.filters.includes(category.id)} onChange={this.handleCheck} />
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
