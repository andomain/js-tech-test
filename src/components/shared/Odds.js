import React from 'react';

import Button from 'react-bootstrap/Button';

const Odds = ({ price, suspended = false, decimal = false }) => {
    const priceText = decimal ? price.dec : `${price.num} / ${price.den}`

    return (
        <Button disabled={suspended}>
            {suspended && 'SUS'}
            {!suspended && priceText}
        </Button>
    );
}

export default Odds;
