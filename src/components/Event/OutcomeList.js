import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

import Outcome from './Outcome';

const OutcomeList = ({ outcomeIds }) => (
    <ListGroup>
        {outcomeIds.map((id) => (<Outcome key={id} id={id} />))}
    </ListGroup>
);

OutcomeList.propTypes = {
    outcomeIds: PropTypes.arrayOf(PropTypes.number),
};

OutcomeList.defaultProps = {
    outcomeIds: [],
};

export default OutcomeList;
