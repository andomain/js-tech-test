import React from 'react';
import { shallow } from 'enzyme';

import { OutcomeDisplay as Outcome } from './Outcome';
import Loader from '../shared/Loader';
import { outcomes } from '../../fixtures';

const processedOutcomes = {
    1: outcomes[0],
    2: outcomes[1],
    3: {
        ...outcomes[1],
        status: {
            displayable: false,
        },
    },
};

const loadingOutcome = shallow(<Outcome id={123} outcomes={processedOutcomes} />);
const nonDisplayableOutcome = shallow(<Outcome id={3} outcomes={processedOutcomes} />);
const displayableOutcome = shallow(<Outcome id={1} outcomes={processedOutcomes} />);


describe('Outcome component', () => {
    test('loading outcomes should display a Loader', () => {
        expect(loadingOutcome.contains(<Loader />)).toEqual(true);
        expect(nonDisplayableOutcome.contains(<Loader />)).toEqual(false);
        expect(displayableOutcome.contains(<Loader />)).toEqual(false);
    });

    test('it should highlight nondisplayable outcomes ', () => {
        expect(nonDisplayableOutcome.find('span').text()).toEqual(`${processedOutcomes[3].name} (Disabled)`);
    });

    test('it should the outcome name when loaded', () => {
        expect(displayableOutcome.find('span').text()).toEqual(processedOutcomes[1].name);
    });
});
