import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MarketList from './MarketList';
import EventTitle from '../shared/EventTitle';
import Loader from '../shared/Loader';

import { EventType } from '../../dataTypes';

import './style.scss';

export const EventDisplay = ({
    events,
    loaded,
    match,
}) => {
    if (!loaded) {
        return (<Loader />);
    }

    const { params: { id } } = match;
    const eventData = events[id];

    return (
        <article className="Event">
            <h1>
                <EventTitle event={eventData} />
            </h1>
            <div className="Event__Controls">
                <Link to="/">Back</Link>
            </div>
            <MarketList marketIds={eventData.markets} />
        </article>
    );
};

const mapStateToProps = (state) => ({
    loaded: state.status.loaded,
    events: state.events,
});


EventDisplay.propTypes = {
    events: PropTypes.objectOf(EventType).isRequired,
    loaded: PropTypes.bool.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }).isRequired,
};

export default connect(mapStateToProps)(EventDisplay);
