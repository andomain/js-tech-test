import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

import EventTitle from '../shared/EventTitle';
import EventScores from '../shared/EventScores';
import { EventType } from '../../dataTypes';

const SummaryItem = ({ item }) => (
    <Link key={item.eventId} to={`/event/${item.eventId}`} className="SummaryItem">
        <ListGroup.Item action>
            <EventTitle event={item} />
            <EventScores event={item} />
        </ListGroup.Item>
    </Link>
);

SummaryItem.propTypes = {
    item: EventType.isRequired,
};

export default SummaryItem;
