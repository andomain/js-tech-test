import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from 'react-bootstrap/Card'

import EventSummary from './components/EventSummary';
import Event from './components/Event';

const App = () => (
    <Router>
        <Card>
            <Card.Img variant="top" src="/assets/footballHeader.jpg" />
            <Card.Body>
                <Switch>
                    <Route path="/event/:id" component={Event} />
                    <Route path="/" component={EventSummary} />
                </Switch>
            </Card.Body>
        </Card>
    </Router>
);

export default App;

