import React from 'react';
import { shallow } from 'enzyme';

import { EventDisplay as Event } from '.';
import Loader from '../shared/Loader';

import { events } from '../../fixtures';

const match = {
    params: {
        id: events[0].eventId.toString(),
    },
};

const parsedEvents = {
    [events[0].eventId]: events[0],
};

const loadingWrapper = shallow(<Event events={parsedEvents} loaded={false} match={match} />);
const loadedWrapper = shallow(<Event events={parsedEvents} loaded match={match} />);

describe('Event component', () => {
    test('display a loader until loaded', () => {
        expect(loadingWrapper.contains(<Loader />)).toEqual(true);
        expect(loadedWrapper.contains(<Loader />)).toEqual(false);
    });
});
