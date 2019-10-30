import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

import Odds from '../shared/Odds';
import Loader from '../Loader';

const Outcome = ({ id, outcomes }) => {
    const outcome = outcomes[id];

    // If outcome not yet loaded
    if (outcome === undefined) {
        return (
            <ListGroup.Item>
                <Loader />
            </ListGroup.Item>
        );
    }

    // If outcome is not displayable
    // TODO: Non-displayable outcomes should not be rendered
    // TODO: If all outcomes for a market are not displayable, the market should not display
    if (!outcome.status.displayable) {
        return (
            <ListGroup.Item>
                {outcome.name} (Disabled)
            </ListGroup.Item>
        )
    }

    return (
        <ListGroup.Item className="Outcome">
            {outcome.name}
            <Odds price={outcome.price} suspended={outcome.status.suspended} />
        </ListGroup.Item>
    );
}


const mapStateToProps = state => ({
    outcomes: state.outcomes,
});

export default connect(mapStateToProps)(Outcome);
