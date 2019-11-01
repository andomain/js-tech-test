import React from 'react';
import { shallow } from 'enzyme';

import { MarketDisplay as Market } from './Market';
import Loader from '../shared/Loader';
import { market } from '../../fixtures';

const undisplayableMarket = {
    ...market,
    status: {
        displayable: false,
    },
};

const markets = {
    1: market,
    2: undisplayableMarket,
};

const loadingMarket = shallow(<Market id={market.marketId} markets={{}} />);
const displayMarket = shallow(<Market id={1} markets={markets} />);
const nonDisplayMarket = shallow(<Market id={2} markets={markets} />);

describe('Market component', () => {
    test('it should display a loader if market is undefined', () => {
        expect(loadingMarket.contains(<Loader />)).toEqual(true);
        expect(displayMarket.contains(<Loader />)).toEqual(false);
        expect(nonDisplayMarket.contains(<Loader />)).toEqual(false);
    });

    test('it should highlight non displayable markets', () => {
        expect(nonDisplayMarket.find('span').text()).toEqual(`${undisplayableMarket.name} (Disabled)`);
    });

    test('it should display the market name when loaded', () => {
        expect(displayMarket.find('span').text()).toEqual(market.name);
    });
});
