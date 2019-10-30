import React from 'react';
import { connect } from 'react-redux';

import EventList from './components/EventList';

const App = ({ events }) => (
    <EventList events={events} />
);

const mapStateToProps = state => ({ events: state.events.eventList });

export default connect(mapStateToProps)(App);

