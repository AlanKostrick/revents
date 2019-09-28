import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    //destructuring so that you do not need this.props.attendee.photoURL
    const { attendee } = this.props;
    return (
      <List.Item>
        <Image as='a' size='mini' circular src={attendee.photoURL} />
      </List.Item>
    );
  }
}
export default EventListAttendee;
