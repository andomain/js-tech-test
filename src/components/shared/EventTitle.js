import React from 'react';
import { EventType } from '../../dataTypes';

const EventTitle = ({ event }) => (
    <span>{`${event.competitors[0].name} v ${event.competitors[1].name}`}</span>
);

EventTitle.propTypes = {
    event: EventType.isRequired,
};

export default EventTitle;
