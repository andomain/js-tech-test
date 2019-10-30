import React from 'react';
import { connect } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import OutcomeList from './OutcomeList';
import Loader from '../Loader';

const Market = ({ id, markets }) => {
    const market = markets[id];

    if (market === undefined) {
        return (
            <Card>
                <Card.Header>
                    <Loader />
                </Card.Header>
            </Card>
        );
    }

    if (!market.status.displayable) {
        return (
            <Card>
                <Card.Header>
                    {market.name} (Disabled)
                </Card.Header>
            </Card>
        );
    }

    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={market.marketId}>
                    {market.name}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={market.marketId}>
                <Card.Body>
                    <OutcomeList outcomeIds={market.outcomes} />
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

const mapStateToProps = state => ({
    markets: state.markets,
})

export default connect(mapStateToProps)(Market);
