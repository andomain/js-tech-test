import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import { EventListDisplay as EventList } from '.';
import Loader from '../shared/Loader';
import { events } from '../../fixtures';

// jest.mock('Link', () => { });

const wrapped = (
    <Router>
        <EventList title="Test" loaded events={events} />
    </Router>
);

const loadingList = shallow(<EventList title="Test" loaded={false} events={events} />);
const loadedList = mount(wrapped);

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
