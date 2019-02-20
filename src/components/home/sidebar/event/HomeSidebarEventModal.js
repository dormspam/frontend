import React, { Component } from "react";

import Categories from "../../../../api/categories";
import "./HomeSidebarEventModal.css";

class HomeSidebarEventModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: {}
    };

    this.getCategories = this.getCategories.bind(this);

    Categories.getCategories().then(response => {
      for (let i = 0; i < response.data.length; i++) {
        this.state.colors[response.data[i].name] = response.data[i]["color"];
      }
    });
  }

  getCategories() {
    let categories = this.props.event.categories;
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

  render() {
    if (this.props.event === null) {
      return <div />;
    }

    let categoryTags = this.getCategories();

    return (
      <div className="HomeSidebarEventModal">
        <div className="metadata">
        <img className="back" src="/img/grey-back.svg" alt="Back" onClick={this.props.onSelectBack} />
          <h3>{this.props.event.sent_from}</h3>
          <div className="minipadding"></div>
          <h3>
            {categoryTags}
          </h3>
          <div className="padding"></div>
          <hr />
        </div>
        <div dangerouslySetInnerHTML={{__html: this.props.event.description}} />
      </div>
    );
  }
}

export default HomeSidebarEventModal;
