import React, { Component } from "react";

import Categories from "../../../api/categories";
import "./HomeFeedEventModal.css";

class HomeFeedEventModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: {}
    };

    this.getCategories = this.getCategories.bind(this);
    this.parseCategories = this.parseCategories.bind(this);

    Categories.getCategories().then(response => {
      for (let i = 0; i < response.data.length; i++) {
        this.state.colors[response.data[i].name] = response.data[i]["color"];
      }
    });
  }

  getCategories() {
    let categories = this.parseCategories(this.props.event.categories);
    let tags = [];
    for (let i=0; i < categories.length; i++) {
      tags.push(<span className="tags"
                      key={"tags-" + categories[i]}
                      style={{border: "2px solid " + this.state.colors[categories[i]],
                              color: this.state.colors[categories[i]]}}>
                      &#9679; {categories[i]}
                </span>);
    }
    return tags;
  }

  parseCategories(categories) {
    categories = categories.substring(1, categories.length - 1);
    let listed = categories.split(",");
    for (let i=0; i < listed.length; i++) {
      listed[i] = listed[i].replace(/"/g, "");
    }
    return listed;
  }

  render() {
    if (this.props.event === null) {
      return null;
    }

    let categoryTags = this.getCategories();

    return (
      <div id={this.props.event.uid} class="HomeFeedEventModal">
      <img className="back" src="/img/x-button.svg" alt="Back" onClick={this.props.onSelectBack} />
          <h3>{this.props.event.sent_from}</h3>
          <div className="minipadding"></div>
          <h3>
            {categoryTags}
          </h3>
          <div className="padding"></div>
          <hr />
        <h2>{this.props.event.title}</h2>
        <div dangerouslySetInnerHTML={{__html: this.props.event.description}} />
      </div>
    );
  }
}

export default HomeFeedEventModal;
