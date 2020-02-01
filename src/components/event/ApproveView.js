import React, { Component } from 'react';
import Events from "../../api/events";
import {
  Container,
  Button,
  Card,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Badge,
  CardBody
} from "reactstrap";

const SortType = {
  ALL : 0,
  OTHER : 1 << 1,
  FOOD : 1 << 2,
  CAREER : 1 << 3,
  FUNDRAISING : 1 << 4,
  APPLICATION : 1 << 5,
  PERFORMANCE : 1 << 6,
  BOBA : 1 << 7,
  TALKS : 1 << 8,
  EECS : 1 << 9,
}
const SortTypeValues = [
  { type: SortType.ALL, name: "All Events", color: null },
  { type: SortType.OTHER, name: "Nontyped", color: null },
  { type: SortType.FOOD, name: "Food", color: "green" },
  { type: SortType.CAREER, name: "Career", color: "orange" },
  { type: SortType.FUNDRAISING, name: "Fundraising", color: "lightblue" },
  { type: SortType.APPLICATION, name: "Application Deadlines", color: "gold" },
  { type: SortType.PERFORMANCE, name: "Performance", color: "pink" },
  { type: SortType.BOBA, name: "Boba", color: "black" },
  { type: SortType.TALKS, name: "Talks", color: "maroon"},
  { type: SortType.EECS, name: "EECS-Jobs-Announce", color: "brown"}
];

export default class ApproveView extends Component {
  constructor(props){
    super(props)
    this.state = {
      event: null
    }

    Events.getEventById(props.match.params.id).then(response => {
      this.setState({
        event: response.data
      });
    });
  }

  getColorNames(t){
    let ret = SortTypeValues.map(function(val) {
      console.log(val)
      const color = val.color;
      if (color == null) {
        return null;
      }
      if (val.type & t) {
        return (
          <Badge
            key={val.type}
            className="mx-2"
            style={{ backgroundColor: color }}
          >
            {val.name}
          </Badge>
        );
      }
    });
    return ret;
  };

  render() {
    if (this.state.event === null) {
      return <div />;
    }
    return (
      <div className="m-4">
      <Row>
        <Col lg="12" xl="6">
          <Card body>
            <h3>{this.state.event.name}</h3>
            <h5>
              {new Date(this.state.event.start_time).toLocaleDateString()} @ {new Date(this.state.event.start_time).toLocaleTimeString()}
            </h5>
            <p> Type: {this.getColorNames(this.state.event.type)} </p>
            <Button href={"/events/" + this.props.match.params.id}>See Event</Button>
            <br />
            <div dangerouslySetInnerHTML={{__html: this.state.event.description}} />
          </Card>
        </Col>
{/*        <Col lg="12" xl="6">:
        </Col>*/}
      </Row>
    </div>
    );
  }
}
