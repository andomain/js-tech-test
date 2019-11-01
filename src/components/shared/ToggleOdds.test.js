import React from 'react';
import { shallow } from 'enzyme';
import Button from 'react-bootstrap/Button';

import { ToggleOddsButton as ToggleOdds } from './ToggleOdds';

const mockHandler = jest.fn();
const decimalWrapper = shallow(<ToggleOdds clickHandler={mockHandler} isDecimal />);
const fractionalWrapper = shallow(<ToggleOdds clickHandler={mockHandler} isDecimal={false} />);

describe('Toggle odds component', () => {
    test('clicking executes a handler', () => {
        const button = decimalWrapper.find(Button);
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        expect(mockHandler.mock.calls.length).toEqual(3);
    });

    test('outputs correct text based on curent display', () => {
        const decimalButton = decimalWrapper.find(Button);
        const fractionButton = fractionalWrapper.find(Button);

        expect(decimalButton.text()).toEqual('Show fractional odds');
        expect(fractionButton.text()).toEqual('Show decimal odds');
    });
});
