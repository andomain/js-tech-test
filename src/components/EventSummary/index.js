import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

import { EventType } from '../../dataTypes';
import Loader from '../Loader';

const EventSummary = ({ events, loaded }) => {
    return (
        <>
            <h1>Live Football</h1>
            {!loaded && <Loader />}
            {loaded && (
                <ListGroup>
                    {events.map(event => (
                        <Link key={event.eventId} to={`/event/${event.eventId}`}>
                            <ListGroup.Item>{event.name}</ListGroup.Item>
                        </Link>
                    ))}
                </ListGroup>
            )}
        </>
    );
}

const mapStateToProps = state => ({
    loaded: state.status.loaded,
    events: Object.values(state.events)
});

export default connect(mapStateToProps)(EventSummary);

EventSummary.propTypes = {
    events: PropTypes.arrayOf(EventType),
}
