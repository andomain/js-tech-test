import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import Outcome from './Outcome';

const OutcomeList = ({ outcomeIds }) => (
    <ListGroup>
        {
            outcomeIds.map(id => (<Outcome key={id} id={id} />))
        }
    </ListGroup>
);

export default OutcomeList;

