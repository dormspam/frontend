import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import "./HomeView.css";

import Categories from "../../api/categories";
import HomeSidebarCalendar from "./sidebar/calendar/HomeSidebarCalendar";
import HomeSidebarCategoriesView from "./sidebar/categories/HomeSidebarCategoriesView";
import HomeHeaderView from "./header/HomeHeaderView";
import HomeSelectionView from "./selection/HomeSelectionView";
import HomeSidebarEventModal from "./sidebar/event/HomeSidebarEventModal";
import HomeFeedView from "./feed/HomeFeedView";
import HomeFeedEventModal from "./feed/HomeFeedEventModal";
import LocalData from "../../api/localdata";

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: moment(),
      event: null,
      search: "",
      user: { settings: { filters: LocalData.getCategoryFilters() }}, //Categories that the user has selected
      categories: Categories.getCategoriesList(), //Should be a list of category names
      mobileMenu: false,
    };

    // axios.get(process.env.REACT_APP_BACKEND_URL + "/users/current", {
    //   withCredentials: true
    // }).then(response => {
    //   this.setState({
    //     user: response.data
    //   });
    // });

    this.handleSelectEvent = this.handleSelectEvent.bind(this);
    this.handleSelectDay = this.handleSelectDay.bind(this);
    this.handleClickAway = this.handleClickAway.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.handleCategoryUpdate = this.handleCategoryUpdate.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  handleSelectEvent(event) {
    if (this.state.event !== null && this.state.event.id === event.id) {
      document.getElementsByClassName("column left")[0].removeEventListener('click', this.handleClickAway, false);
      this.setState({
        event: null
      });
    } else {
      document.getElementsByClassName("column left")[0].addEventListener('click', this.handleClickAway, false);
      this.setState({ event });
    }
  }

  handleSelectDay(m) {
    this.setState({
      day: m,
      event: null
    });
  }

  handleClickAway(event) {
    document.getElementsByClassName("column left")[0].removeEventListener('click', this.handleClickAway, false);
    this.setState({
      event: null
    });
  }

  handleSearch(search) {
    this.setState({ search });
  }

  handleUserUpdate(data) {
    this.setState({
      user: data
    });
  }

  handleCategoryUpdate(categories) { //Should never be called
    this.setState({
      categories: categories
    });
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenu: !this.state.mobileMenu
    });
  }

  render() {
    return (
      <div className="HomeView">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScdLEjdkiVAdQ2gKoA1QtD9ANvBuOrce4ZIJwbIVQz7TRkObg/viewform" target="_blank">
          <div className="betaform"> beta - report bugs / suggest changes <p style={{textDecoration: "underline", display: "inline-block"}}>here</p></div>
        </a>
        <div className={"column left" + (this.state.event !== null ? " inactive" : "")}>
          <div className="betaspace"></div>
          <div className={"greybox" + (this.state.mobileMenu ? " active" : "")} onClick={this.toggleMobileMenu}/>
          <HomeHeaderView onHamburgerClick={this.toggleMobileMenu}/>
          <HomeSelectionView
            onSearch={this.handleSearch}
            selectedDay={this.state.day}
            onSelectDay={this.handleSelectDay}
            categories={this.state.categories}
          />
          <HomeFeedView
            search={this.state.search}
            selectedDay={this.state.day}
            selectedEvent={this.state.event}
            onSelectEvent={this.handleSelectEvent}
            categories={this.state.categories}
          />
        </div>
        <div className="modal">
            <HomeFeedEventModal
              event={this.state.event}
              onSelectBack={this.handleClickAway}
            />
        </div>
        <div className={"column right" + (this.state.mobileMenu ? " mobile" : "") + (this.state.event !== null ? " active" : "")}>
          <div className="betaspace"></div>
          <HomeSidebarCalendar
            selectedDay={this.state.day}
            onSelectDay={this.handleSelectDay}
            categories={this.state.categories}
          />
          <HomeSidebarCategoriesView
            onUserUpdate={this.handleUserUpdate}
            user={this.state.user}
            onCategoryUpdate={this.handleCategoryUpdate}
          />
          <HomeSidebarEventModal
            onSelectBack={this.handleClickAway}
            event={this.state.event}
          />
        </div>
      </div>
    );
  }
}

export default HomeView;
