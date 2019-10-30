import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';

import Event from '../Event';
import { EventType } from '../../dataTypes';

const EventList = ({ events }) => {
    return (
        <Card>
            <Card.Img variant="top" src="assets/footballHeader.jpg" />
            <Card.Body>
                <Card.Title>Live Football</Card.Title>
                <ListGroup>
                    {events.map(event => (
                        <Event key={event.eventId} event={event} />)
                    )}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default EventList;

EventList.propTypes = {
    events: PropTypes.arrayOf(EventType),
}
