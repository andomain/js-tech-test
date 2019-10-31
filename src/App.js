import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import EventList from './components/EventList';
import Event from './components/Event';

export const App = () => (
    <Router>
        <Card>
            <Card.Img variant="top" src="/assets/footballHeader.jpg" />
            <Card.Body>
                <Switch>
                    <Route path="/event/:id" component={Event} />
                    <Route path="/" component={() => <EventList title="Live Football" />} />
                </Switch>
            </Card.Body>
        </Card>
    </Router>
);

export default App;
