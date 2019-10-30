import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

import { EventType } from '../../dataTypes';

const EventSummary = ({ events }) => {
    return (
        <ListGroup>
            {events.map(event => (
                <Link key={event.eventId} to={`/event/${event.eventId}`}>
                    <ListGroup.Item>{event.name}</ListGroup.Item>
                </Link>
            ))}
        </ListGroup>
    );
}

export default EventSummary;

EventSummary.propTypes = {
    events: PropTypes.arrayOf(EventType),
}
