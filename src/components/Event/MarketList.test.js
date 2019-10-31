import React from 'react';
import { shallow } from 'enzyme';

import Market from './Market';
import { events } from '../../fixtures';

import MarketList from './MarketList';

const wrapper = shallow(<MarketList marketIds={events[0].markets} />);

describe('Market List component', () => {
    test('lists markets', () => {
        expect(wrapper.find(Market).length).toEqual(events[0].markets.length);
    });
});
