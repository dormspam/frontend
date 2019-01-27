import React, { Component } from "react";

class EventModal extends Component {
  constructor(props) {
    super(props);

    console.log(props.event);
  }

  render() {
    return (
      <div className="EventModal">
        <p>This is an event</p>
      </div>
    );
  }
}

export default EventModal;
