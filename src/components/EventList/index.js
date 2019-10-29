import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { togglePrimaryMarkets } from '../../actions/status';
import { EventType } from '../../dataTypes';

const EventList = ({ events, showPrimary, togglePrimary }) => {
    const marketButtonText = `${showPrimary ? 'Hide' : 'Show'} Primary Markets`;

    return (
        <article>
            <h1>Events</h1>
            <div>
                <button type="button" onClick={togglePrimary}>
                    {marketButtonText}
                </button>
            </div>
            <ul>
                {events.map(event => (
                    <li key={event.eventId}>{event.name}</li>
                ))}
            </ul>
        </article>
    );
}

const mapStateToProps = state => ({ showPrimary: state.status.showPrimary });

const mapDispatchToProps = dispatch => ({ togglePrimary: () => dispatch(togglePrimaryMarkets) });

export default connect(mapStateToProps, mapDispatchToProps)(EventList);

EventList.propTypes = {
    events: PropTypes.arrayOf(EventType),
}
