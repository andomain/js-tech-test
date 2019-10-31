import React from 'react';
import { shallow } from 'enzyme';

import { Odds } from './Odds';

const price = {
    decimal: 1.66666667,
    num: 10,
    den: 6,
};

const decimalWrapper = shallow(<Odds price={price} suspended={false} decimal />);
const fractionWrapper = shallow(<Odds price={price} suspended={false} decimal={false} />);
const suspendedDecimalWrapper = shallow(<Odds price={price} suspended decimal />);
const suspendedFractionWrapper = shallow(<Odds price={price} suspended decimal={false} />);

describe('Odds comonent renders price information', () => {
    test('outputs decimal prices to 2dp', () => {
        expect(decimalWrapper.text()).toBe('1.67');
    });
    test('outputs fractional prices', () => {
        expect(fractionWrapper.text()).toBe('10 / 6');
    });
    test('decimal prices can be suspended', () => {
        expect(suspendedDecimalWrapper.text()).toBe('SUS');
    });
    test('outputs fractional prices', () => {
        expect(suspendedFractionWrapper.text()).toBe('SUS');
    });
});
