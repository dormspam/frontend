import React, { Component } from "react";
import {
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  Input,
  Badge,
  Row
} from "reactstrap";
// import useLogin from "../hooks/useLogin";
// import ServerHelper, { ServerURL } from "./ServerHelper";
// import createAlert, { AlertType } from "./Alert";
// import { Event, EventString } from "./CalendarPage";
// TODO(kevinfang): Upgrade to react-table v7
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Users from "../../api/users";
import Events from "../../api/events"
import EventsTable from './EventsTable'
import './AdminView.css'

export class AdminView extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      allEvents: null,
      currentItem: "Events"
    }

    this.handleItemClick = this.handleItemClick.bind(this)
  }

  componentDidMount(){
    Events.getAllEvents().then(response => {
      console.log(response.data)
      this.setState({
        loading: false,
        allEvents: response.data
      })
    }).catch(error => {
      console.log(error)
    })
  }
  
  handleItemClick(event) {
    if (event.target.getAttribute("item") === "Log Out") {
      Users.logout().then(response => {
        this.setState({
          redirect: "/",
        });
      });
    }

    this.setState({
      currentItem: event.target.getAttribute("item")
    });
  }

  render() {
    let adminItems = ["Events", "Log Out"];
    let adminItemTags = adminItems.map(item => (
      <li className={item === this.state.currentItem ? "active" : ""} key={item} item={item} onClick={this.handleItemClick}>{item}</li>
    ));
    return (
      <div className="AdminView">
        <div className="right column">
          {this.state.loading
            ? <a>Loading Data</a>
            : <EventsTable data={this.state.allEvents}/>
          }
        </div>
        <div className="left column">
          <div className="headertop">
            <a href="/">
              <img src="/img/back.svg" alt="Admin Settings" />
              <br />
              <img className="logo" src="/img/dormspam.svg" alt="Logo" />
            </a>
          </div>
          <ul>
            {adminItemTags}
          </ul>
        </div>
      </div>
    );
    };
  }




  
export default AdminView;
