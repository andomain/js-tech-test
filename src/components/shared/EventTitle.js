import React from 'react';

const EventTitle = ({ event }) => (
    <span>{`${event.competitors[0].name} v ${event.competitors[1].name}`}</span>
);

export default EventTitle;
