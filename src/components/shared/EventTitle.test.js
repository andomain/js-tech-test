import React from 'react';
import { shallow } from 'enzyme';

import EventTitle from './EventTitle';
import { events } from '../../fixtures';

const wrapper = shallow(<EventTitle event={events[0]} />);

test('EventTitle renders an events title', () => {
    expect(wrapper.text()).toBe('Shanghai Shenhua v Shandong Luneng Taishan');
});
