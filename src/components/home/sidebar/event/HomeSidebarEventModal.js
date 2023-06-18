import React, { Component } from "react";
import moment from "moment"
import Categories from "../../../../api/categories";
import "./HomeSidebarEventModal.css";

class HomeSidebarEventModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: {...Categories.getCategoriesColorMapping()}  //Shallow copy
    };

    this.getCategories = this.getCategories.bind(this);
    
    // Categories.getCategoriesColorMapping().then(response => {
    //   for (let i = 0; i < response.data.length; i++) {
    //     this.state.colors[response.data[i].name] = response.data[i]["color"];
    //   }
    // });
  }

  getCategories() {
    let categories = this.props.event.tags;
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
    let date = this.props.event.user_email + " on " + moment(new Date(this.props.event.date_created).toString()).format('MM/DD/YYYY h:mm a')

    return (
      <div className="HomeSidebarEventModal">
        <div className="metadata">
        <img className="back" src="/img/grey-back.svg" alt="Back" onClick={this.props.onSelectBack} />
          <h3>{date}</h3>
          <div className="minipadding"></div>
          <h3>
            {categoryTags}
          </h3>
          <div className="padding"></div>
          <hr />
        </div>
        <div dangerouslySetInnerHTML={{__html: this.props.event.description_html}} />
      </div>
    );
  }
}

export default HomeSidebarEventModal;
