import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { EventType } from '../../dataTypes';

const Event = ({ event }) => (
    <ListGroup.Item key={event.eventId}>{event.name}</ListGroup.Item>
);

Event.propTypes = {
    event: EventType,
}

export default Event;
