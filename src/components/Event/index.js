import React from 'react';
import { connect } from 'react-redux';

import Loader from '../Loader';

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
        <h1>{eventData.name}</h1>
    );
}

const mapStateToProps = state => ({
    loaded: state.status.loaded,
    events: state.events,
});

export default connect(mapStateToProps)(Event);
