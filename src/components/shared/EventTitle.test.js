import React from 'react';
import { shallow } from 'enzyme';

import EventTitle from './EventTitle';

const event = {
    eventId: 1,
    name: 'This name should not be used',
    startTime: 'start-time',
    scores: {},
    competitors: [
        {
            name: 'Home competitor',
        },
        {
            name: 'Away competitor',
        },
    ],
};

const wrapper = shallow(<EventTitle event={event} />);

test('EventTitle renders an events title', () => {
    const contents = wrapper.find('span');
    expect(contents.text()).toBe('Home competitor v Away competitor');
});
