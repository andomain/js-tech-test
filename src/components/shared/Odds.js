import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import { PriceType } from '../../dataTypes';

/**
 * Output a price in fractional/decimal format
 */
export const OddsDisplay = ({ price, suspended, decimal }) => {
    const priceText = decimal ? Number(price.decimal).toFixed(2) : `${price.num} / ${price.den}`;

    return (
        <Button disabled={suspended}>
            {suspended && 'SUS'}
            {!suspended && priceText}
        </Button>
    );
};

const mapStateToProps = (state) => ({
    decimal: state.status.decimalOdds,
});

OddsDisplay.propTypes = {
    price: PriceType.isRequired,
    suspended: PropTypes.bool.isRequired,
    decimal: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(OddsDisplay);
