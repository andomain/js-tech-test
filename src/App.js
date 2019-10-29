import React from 'react';
import { connect } from 'react-redux';

import EventList from './components/EventList';

const App = ({ events }) => (
    <div className="App">
        <header className="App__Header">
            <EventList events={events} />
        </header>
    </div>
);

const mapStateToProps = state => ({ events: state.events.eventList });

export default connect(mapStateToProps)(App);

