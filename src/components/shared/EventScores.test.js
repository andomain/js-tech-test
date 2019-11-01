import React from 'react';
import { shallow } from 'enzyme';

import EventScores from './EventScores';
import { events } from '../../fixtures';

const wrapper = shallow(<EventScores event={events[1]} />);

describe('Event scores component', () => {
    test('outputs event score', () => {
        const score = wrapper.find('span');
        expect(score.text()).toEqual('0 - 1');
    });
});
