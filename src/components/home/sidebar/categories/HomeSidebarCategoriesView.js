import React, { Component } from "react";
import axios from "axios";
import "./HomeSidebarCategoriesView.css";
import Categories from "../../../../api/categories";
export default class HomeSidebarCategoriesView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      filters: props.user.settings.filters
    };

    const tempFilters = [...Categories.getCategoriesList()]; //Define separately to get reference for onCategoryUpdate

    this.setState({
      categories: {...Categories.getCategoriesColorMapping()},
      filters: tempFilters
    });
    this.props.onCategoryUpdate(tempFilters);

    // axios
    //   .get(process.env.REACT_APP_BACKEND_URL + "/categories")
    //   .then(res => {
    //     let tempFilters = [];
    //     for (let i=0; i < res.data.length; i++) {
    //       tempFilters.push(res.data[i].name);
    //     }
    //     this.setState({
    //       categories: res.data,
    //       filters: tempFilters
    //     });
    //     this.props.onCategoryUpdate(tempFilters);
    //   });


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
    axios.put(process.env.REACT_APP_BACKEND_URL + "/users/current", {
      filters: this.state.filters
    }, {
      withCredentials: true
    }).then(response => {
      this.props.onUserUpdate(response.data);
    });
  }

  render() {
    let categoryTags = [];

    const index = 0;
    for(const [categoryName, categoryColor] of Object.entries(this.state.categories)) {
      categoryTags.append((<div
          className={"category"}
          key={index}
          index={index}
          onClick={this.handleCategoryClick}
          style={(this.state.filters.includes(categoryName) ? {"color": categoryColor,
                  "borderLeft": "3px solid " + categoryColor} : {"color": "#CFCFCF",
                  "borderLeft": "3px solid #CFCFCF"})}>
        <input type="checkbox" checked={this.state.filters.includes(categoryName)} onChange={this.handleCheck} />
        <div className="text">
          <h3>{categoryName}</h3>
        </div>
      </div>
    ))
    index++;
  };

    return (
      <div className="HomeSidebarCategoriesView">
        {categoryTags}
      </div>
    );
  }
}
