import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import { toggleOdds } from '../../actions/status';

export const ToggleOddsButton = ({ clickHandler, isDecimal }) => {
    const oddsText = `Show ${isDecimal ? 'fractional' : 'decimal'} odds`;

    return (
        <Button onClick={clickHandler}>{oddsText}</Button>
    );
};

const mapStateToProps = (state) => ({
    isDecimal: state.status.decimalOdds,
});

const mapDispatchToProps = (dispatch) => ({
    clickHandler: () => dispatch(toggleOdds()),
});

ToggleOddsButton.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    isDecimal: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleOddsButton);
