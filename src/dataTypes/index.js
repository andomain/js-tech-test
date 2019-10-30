import PropTypes from 'prop-types';

const CompetitorType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
});

const status = PropTypes.shape({
    active: PropTypes.bool,
    started: PropTypes.bool,
    live: PropTypes.bool,
    resulted: PropTypes.bool,
    finished: PropTypes.bool,
    cashoutable: PropTypes.bool,
    displayable: PropTypes.bool,
    suspended: PropTypes.bool,
    requestabet: PropTypes.bool,
});

export const PriceType = PropTypes.shape({
    den: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    num: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    decimal: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
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
    status,
    boostCount: PropTypes.number.isRequired,
    superBoostCount: PropTypes.number.isRequired,
    markets: PropTypes.arrayOf[PropTypes.number],
    linkedEventId: PropTypes.number,
    linkedEventTypeId: PropTypes.number,
    linkedEventTypeName: PropTypes.string,
});

export const MarketType = PropTypes.shape({
    marketId: PropTypes.number.isRequired,
    eventId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    displayOrder: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    status,
    liabilities: PropTypes.shape({
        livePriceLimit: PropTypes.number,
    }).isRequired,
    spAvail: PropTypes.bool.isRequired,
    outcomes: PropTypes.arrayOf(PropTypes.number).isRequired,
});

export const OutcomeType = PropTypes.shape({
    outcomeId: PropTypes.number.isRequired,
    marketId: PropTypes.number.isRequired,
    eventId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    displayOrder: PropTypes.number.isRequired,
    result: PropTypes.shape({
        place: PropTypes.number,
        result: PropTypes.string,
        favourite: PropTypes.bool,
    }),
    linkedOutcomeId: PropTypes.number,
    price: PriceType,
    status,
});
