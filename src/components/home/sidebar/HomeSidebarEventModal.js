import React, { Component } from "react";
import axios from "axios";
import "./HomeSidebarEventModal.css";

class HomeSidebarEventModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: {}
    };

    this.getCategories = this.getCategories.bind(this);
    this.parseCategories = this.parseCategories.bind(this);

    axios.get(process.env.REACT_APP_BACKEND_URL + "/categories", {
      withCredentials: true
    }).then(res => {
      let colorList = res.data;
      for (let i=0; i < colorList.length; i++) {
        this.state.colors[colorList[i].name] = colorList[i]["color"];
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
