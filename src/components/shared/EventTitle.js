import PropTypes from 'prop-types';

/**
 * Format an event title properly
 */
const EventTitle = ({ event }) => {
    const { competitors } = event;
    return `${competitors[0].name} v ${competitors[1].name}`;
};

EventTitle.propTypes = {
    event: PropTypes.shape({
        competitors: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
            }),
        ),
    }).isRequired,
};

export default EventTitle;
