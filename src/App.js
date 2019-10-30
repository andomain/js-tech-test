import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from 'react-bootstrap/Card'

import EventSummary from './components/EventSummary';

const App = ({ events }) => (
    <Router>
        <Card>
            <Card.Img variant="top" src="/assets/footballHeader.jpg" />
            <Card.Body>
                <Switch>
                    <Route path="/event/:id">
                        TODO: Render event page
                    </Route>
                    <Route path="/">
                        <EventSummary events={events} />
                    </Route>
                </Switch>
            </Card.Body>
        </Card>
    </Router>
);

const mapStateToProps = state => ({ events: state.events });

export default connect(mapStateToProps)(App);

