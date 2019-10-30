import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

import Loader from '../Loader';
import SummaryItem from './SummaryItem';
import { EventType } from '../../dataTypes';

import './style.scss';

const EventList = ({ events, loaded }) => (
    <div className="EventList">
        <h1>Live Football</h1>
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

export default connect(mapStateToProps)(EventList);

EventList.propTypes = {
    events: PropTypes.arrayOf(EventType),
    loaded: PropTypes.bool.isRequired,
};

EventList.defaultProps = {
    events: [],
};
