import React from 'react';
import { EventType } from '../../dataTypes';

/**
 * Format an event title properly
 */
const EventTitle = ({ event }) => {
    const { competitors } = event;
    return (<span>{`${competitors[0].name} v ${competitors[1].name}`}</span>);
};

EventTitle.propTypes = {
    event: EventType.isRequired,
};

export default EventTitle;
