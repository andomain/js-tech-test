import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import MarketList from './MarketList';
import EventTitle from '../shared/EventTitle';
import Loader from '../Loader';

import { toggleOdds } from '../../actions/status';

import './style.scss';

const Event = ({
    events,
    loaded,
    match: {
        params: {
            id
        },
    },
    decimalOdds,
    toggleOddsHandler,
}) => {
    if (!loaded) {
        return (<Loader />)
    }

    const eventData = events[id];
    const oddsText = `Show ${decimalOdds ? 'fractional' : 'decimal'} odds`;

    return (
        <article className="Event">
            <h1>
                <EventTitle event={eventData} />
            </h1>
            <div className="Event__Controls">
                <Link to="/">Back</Link>
                <Button onClick={toggleOddsHandler}>{oddsText}</Button>

            </div>
            <MarketList marketIds={eventData.markets} />
        </article>
    );
}

const mapStateToProps = state => ({
    loaded: state.status.loaded,
    events: state.events,
    decimalOdds: state.status.decimalOdds,
});

const mapDispatchToProps = dispatch => ({
    toggleOddsHandler: () => dispatch(toggleOdds())
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
