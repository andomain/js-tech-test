import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

const Odds = ({ price, suspended = false, decimal }) => {
    const priceText = decimal ? Number(price.decimal).toFixed(2) : `${price.num} / ${price.den}`

    return (
        <Button disabled={suspended}>
            {suspended && 'SUS'}
            {!suspended && priceText}
        </Button>
    );
}

const mapStateToProps = state => ({
    decimal: state.status.decimalOdds,
})

export default connect(mapStateToProps)(Odds);
