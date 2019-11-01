import React from 'react';
import { EventType } from '../../dataTypes';

const EventScores = ({ event }) => {
    const { scores } = event;

    return (<span>{`${scores.home} - ${scores.away}`}</span>);
};

EventScores.propTypes = {
    event: EventType.isRequired,
};

export default EventScores;
