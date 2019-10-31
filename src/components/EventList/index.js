import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

import Loader from '../shared/Loader';
import SummaryItem from './SummaryItem';
import { EventType } from '../../dataTypes';

import './style.scss';

export const EventListDisplay = ({ events, title, loaded }) => (
    <div className="EventList">
        <h1>{title}</h1>
        {!loaded && <Loader />}
        {loaded && (
            <ListGroup>
                {events.map((event) => (
                    <SummaryItem key={event.eventId} item={event} />
                ))}
            </ListGroup>
        )}
    </div>
);

const mapStateToProps = (state) => ({
    loaded: state.status.loaded,
    events: Object.values(state.events),
});

EventListDisplay.propTypes = {
    title: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(EventType),
    loaded: PropTypes.bool.isRequired,
};

EventListDisplay.defaultProps = {
    events: [],
};

export default connect(mapStateToProps)(EventListDisplay);
