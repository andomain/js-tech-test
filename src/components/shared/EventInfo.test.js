import React from 'react';
import { shallow } from 'enzyme';
import EventInfo from './EventInfo';
import { events } from '../../fixtures';

const noTournament = {
    ...events[1],
};

delete noTournament.linkedEventTypeName;

const wrapper = shallow(<EventInfo event={events[0]} />);
const noTournwrapper = shallow(<EventInfo event={noTournament} />);

describe('Events info component', () => {
    test('it should show the date as a string', () => {
        const date = new Date(events[0].startTime).toDateString();
        expect(wrapper.find('.Event__Info--date').text()).toEqual(date);
    });

    test('it should conditionally show tournament', () => {
        expect(wrapper.exists('.Event__Info--tournament')).toEqual(true);
        expect(noTournwrapper.exists('.Event__Info--tournament')).toEqual(false);
        expect(wrapper.find('.Event__Info--tournament').text()).toEqual(events[0].linkedEventTypeName);
    });
});
