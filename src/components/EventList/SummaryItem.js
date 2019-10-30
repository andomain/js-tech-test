import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

import EventTitle from '../shared/EventTitle';
import { EventType } from '../../dataTypes';

const SummaryItem = ({ item }) => {
    const { scores } = item;

    return (
        <Link key={item.eventId} to={`/event/${item.eventId}`} className="SummaryItem">
            <ListGroup.Item action>
                <EventTitle event={item} />
                <span>{`${scores.home} - ${scores.away}`}</span>
            </ListGroup.Item>
        </Link>
    );
};

SummaryItem.propTypes = {
    item: EventType.isRequired,
};

export default SummaryItem;
