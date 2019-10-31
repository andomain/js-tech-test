import React from 'react';
import { shallow } from 'enzyme';

import { Odds } from './Odds';
import { outcomes } from '../../fixtures';

const { price } = outcomes[0];

const decimalWrapper = shallow(<Odds price={price} suspended={false} decimal />);
const fractionWrapper = shallow(<Odds price={price} suspended={false} decimal={false} />);
const suspendedDecimalWrapper = shallow(<Odds price={price} suspended decimal />);
const suspendedFractionWrapper = shallow(<Odds price={price} suspended decimal={false} />);

describe('Odds comonent renders price information', () => {
    test('outputs decimal prices to 2dp', () => {
        expect(decimalWrapper.text()).toBe('4.50');
    });
    test('outputs fractional prices', () => {
        expect(fractionWrapper.text()).toBe('7 / 2');
    });
    test('decimal prices can be suspended', () => {
        expect(suspendedDecimalWrapper.text()).toBe('SUS');
    });
    test('outputs fractional prices', () => {
        expect(suspendedFractionWrapper.text()).toBe('SUS');
    });
});
