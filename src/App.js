import React from 'react';
import { connect } from 'react-redux';

const App = ({ eventData }) => (
    <div className="App">
        <header className="App__Header">
            <ul>
                {eventData.events.map(event => (
                    <li key={event.eventId}>{event.name}</li>
                ))}
            </ul>
        </header>
    </div>
);

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);

