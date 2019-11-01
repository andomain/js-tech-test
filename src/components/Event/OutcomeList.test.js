import React from 'react';
import { shallow } from 'enzyme';

import OutcomeList from './OutcomeList';
import Outcome from './Outcome';
import { market } from '../../fixtures';

const wrapper = shallow(<OutcomeList outcomeIds={market.outcomes} />);

describe('Outcome list component', () => {
    test('lists market outcomes', () => {
        expect(wrapper.find(Outcome).length).toEqual(market.outcomes.length);
    });
});
