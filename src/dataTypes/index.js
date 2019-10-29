import PropTypes from 'prop-types';

const CompetitorType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
});

const EventStatus = PropTypes.shape({
    active: PropTypes.bool.isRequired,
    started: PropTypes.bool.isRequired,
    live: PropTypes.bool.isRequired,
    resulted: PropTypes.bool.isRequired,
    finished: PropTypes.bool.isRequired,
    cashoutable: PropTypes.bool.isRequired,
    displayable: PropTypes.bool.isRequired,
    suspended: PropTypes.bool.isRequired,
    requestabet: PropTypes.bool.isRequired
});

export const EventType = PropTypes.shape({
    eventId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    displayOrder: PropTypes.number.isRequired,
    sort: PropTypes.string.isRequired,
    classId: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
    typeId: PropTypes.number.isRequired,
    typeName: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    scores: PropTypes.shape({
        home: PropTypes.number.isRequired,
        away: PropTypes.number.isRequired,
    }),
    competitors: PropTypes.arrayOf(CompetitorType),
    status: EventStatus,
    boostCount: PropTypes.number.isRequired,
    superBoostCount: PropTypes.number.isRequired,
    markets: PropTypes.arrayOf[PropTypes.number],
    linkedEventId: PropTypes.number,
    linkedEventTypeId: PropTypes.number,
    linkedEventTypeName: PropTypes.string,
});

