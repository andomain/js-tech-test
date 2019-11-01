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
    displayOrder: PropTypes.number,
    sort: PropTypes.string,
    classId: PropTypes.number,
    className: PropTypes.string,
    typeId: PropTypes.number,
    typeName: PropTypes.string,
    startTime: PropTypes.string.isRequired,
    scores: PropTypes.shape({
        home: PropTypes.number,
        away: PropTypes.number,
    }).isRequired,
    competitors: PropTypes.arrayOf(CompetitorType),
    status,
    boostCount: PropTypes.number,
    superBoostCount: PropTypes.number,
    markets: PropTypes.arrayOf[PropTypes.number],
    linkedEventId: PropTypes.number,
    linkedEventTypeId: PropTypes.number,
    linkedEventTypeName: PropTypes.string,
});

export const MarketType = PropTypes.shape({
    marketId: PropTypes.number.isRequired,
    eventId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    displayOrder: PropTypes.number,
    type: PropTypes.string,
    status,
    liabilities: PropTypes.shape({
        livePriceLimit: PropTypes.number,
    }),
    spAvail: PropTypes.bool,
    outcomes: PropTypes.arrayOf(PropTypes.number).isRequired,
});

export const OutcomeType = PropTypes.shape({
    outcomeId: PropTypes.number.isRequired,
    marketId: PropTypes.number.isRequired,
    eventId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    displayOrder: PropTypes.number,
    result: PropTypes.shape({
        place: PropTypes.number,
        result: PropTypes.string,
        favourite: PropTypes.bool,
    }),
    linkedOutcomeId: PropTypes.number,
    price: PriceType,
    status,
});
