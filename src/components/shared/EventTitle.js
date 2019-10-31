import React from 'react';
import PropTypes from 'prop-types';

const EventTitle = ({ event }) => (
    <span>{`${event.competitors[0].name} v ${event.competitors[1].name}`}</span>
);

EventTitle.propTypes = {
    event: PropTypes.shape({
        competitors: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            }),
        ),
    }).isRequired,
};

export default EventTitle;
