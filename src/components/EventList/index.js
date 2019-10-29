import React from 'react';
import PropTypes from 'prop-types';

import { EventType } from '../../dataTypes';

const EventList = ({ events }) => {
    return (
        <ul>
            {events.map(event => (
                <li key={event.eventId}>{event.name}</li>
            ))}
        </ul>
    );
}
export default EventList;

EventList.propTypes = {
    events: PropTypes.arrayOf(EventType),
}
