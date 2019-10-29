import React from 'react';
import { connect } from 'react-redux';

import EventList from './components/EventList';

const App = ({ eventData }) => (
    <div className="App">
        <header className="App__Header">
            <EventList events={eventData.events} />
        </header>
    </div>
);

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);

