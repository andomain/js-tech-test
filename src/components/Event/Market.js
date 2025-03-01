import React from 'react';
import { connect } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import OutcomeList from './OutcomeList';
import Loader from '../shared/Loader';

import { MarketType } from '../../dataTypes';

export const MarketDisplay = ({ id, markets }) => {
    const market = markets[id];

    // If market has not yet loaded from the socket
    if (market === undefined) {
        return (
            <Card>
                <Card.Header>
                    <Loader />
                </Card.Header>
            </Card>
        );
    }

    // If market is not displayable
    // TODO: Non-displayable markets should not be rendered
    // TODO: If all markets for an event are not displayable, the event should not display
    if (!market.status.displayable) {
        return (
            <Card>
                <Card.Header>
                    <span>
                        {`${market.name} (Disabled)`}
                    </span>
                </Card.Header>
            </Card>
        );
    }

    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={market.marketId}>
                    <span>{market.name}</span>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={market.marketId}>
                <Card.Body>
                    <OutcomeList outcomeIds={market.outcomes} />
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

const mapStateToProps = (state) => ({
    markets: state.markets,
});

MarketDisplay.propTypes = {
    id: PropTypes.number.isRequired,
    markets: PropTypes.objectOf(MarketType).isRequired,
};

export default connect(mapStateToProps)(MarketDisplay);
