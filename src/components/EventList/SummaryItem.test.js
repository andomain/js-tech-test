import React from 'react';
import { shallow } from 'enzyme';

import SummaryItem from './SummaryItem';
import { events } from '../../fixtures';

const wrapper = shallow(<SummaryItem item={events[1]} />);

describe('Summary Item component', () => {
    // Other text output is tested by EventTitle tests

    test('outputs event score', () => {
        const score = wrapper.find('span');
        expect(score.text()).toEqual('0 - 1');
    });
});
