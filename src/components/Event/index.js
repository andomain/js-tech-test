import React from 'react';
import { connect } from 'react-redux';

import MarketList from './MarketList';
import EventTitle from '../shared/EventTitle';
import Loader from '../Loader';

import './style.scss';

const Event = ({
    events,
    loaded,
    match: {
        params: {
            id
        },
    },
}) => {
    if (!loaded) {
        return (<Loader />)
    }

    const eventData = events[id];

    return (
        <article>
            <h1>
                <EventTitle event={eventData} />
            </h1>
            <MarketList marketIds={eventData.markets} />
        </article>
    );
}

const mapStateToProps = state => ({
    loaded: state.status.loaded,
    events: state.events,
});

export default connect(mapStateToProps)(Event);
