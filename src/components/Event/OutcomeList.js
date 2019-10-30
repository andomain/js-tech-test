import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

const OutcomeList = ({ outcomes, outcomeIds }) => (
    <ListGroup>
        {
            outcomeIds.map(id => (
                <ListGroup.Item>
                    {outcomes[id] && outcomes[id].name}
                </ListGroup.Item>
            ))
        }
    </ListGroup>
);

const mapStateToProps = state => ({
    outcomes: state.outcomes,
});

export default connect(mapStateToProps)(OutcomeList);

