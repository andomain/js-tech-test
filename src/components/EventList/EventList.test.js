import React from 'react';
import { shallow } from 'enzyme';

import { EventListDisplay as EventList } from '.';
import Loader from '../shared/Loader';
import { events } from '../../fixtures';

const loadingList = shallow(<EventList title="Test" loaded={false} events={events} />);
const loadedList = shallow(<EventList title="Test" loaded events={events} />);

describe('Event List component', () => {
    test('should render the title despite loading status', () => {
        const loadingTitle = loadingList.find('h1');
        const loadedTitle = loadedList.find('h1');

        expect(loadingTitle.text()).toEqual('Test');
        expect(loadedTitle.text()).toEqual('Test');
    });

    test('should display a loader if loading', () => {
        expect(loadingList.contains(<Loader />)).toEqual(true);
        expect(loadedList.contains(<Loader />)).toEqual(false);
    });

    test('should display a list of items when loaded', () => {
        expect(loadedList.find('SummaryItem').length).toEqual(events.length);
    });
});
