import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import Market from './Market';

const MarketList = ({ marketIds }) => (
    <Accordion>
        {marketIds.map(marketId => <Market key={marketId} id={marketId} />)}
    </Accordion>
);

export default MarketList;
