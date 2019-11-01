import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';

import Market from './Market';

const MarketList = ({ marketIds }) => (
    <Accordion>
        {marketIds.map((marketId) => <Market key={marketId} id={marketId} />)}
    </Accordion>
);

MarketList.propTypes = {
    marketIds: PropTypes.arrayOf(PropTypes.number),
};

MarketList.defaultProps = {
    marketIds: [],
};

export default MarketList;
