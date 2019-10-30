import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const SummaryItem = ({ item }) => {
    const { competitors, scores } = item;

    return (
        <Link key={item.eventId} to={`/event/${item.eventId}`} className="SummaryItem">
            <ListGroup.Item action>
                <span>{`${competitors[0].name} v ${competitors[1].name}`}</span>
                <span>{`${scores.home} - ${scores.away}`}</span>
            </ListGroup.Item>
        </Link>
    );
};

export default SummaryItem;
