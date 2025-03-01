export const events = [
    {
        eventId: 21249939,
        name: 'Shanghai Shenhua 0 v 0 Shandong Luneng Taishan',
        displayOrder: -1000,
        sort: 'MTCH',
        linkedEventId: 21228740,
        classId: 5,
        className: 'Football',
        typeId: 10003971,
        typeName: 'Football Live',
        linkedEventTypeId: 10005942,
        linkedEventTypeName: 'Chinese Super League',
        startTime: '2017-09-19T11:35:23.000Z',
        scores: {
            home: 0,
            away: 0,
        },
        competitors: [
            {
                name: 'Shanghai Shenhua',
                position: 'home',
            },
            {
                name: 'Shandong Luneng Taishan',
                position: 'away',
            },
        ],
        status: {
            active: true,
            started: true,
            live: true,
            resulted: false,
            finished: false,
            cashoutable: true,
            displayable: true,
            suspended: false,
            requestabet: false,
        },
        boostCount: 0,
        superBoostCount: 0,
        markets: [93649179],
    },
    {
        eventId: 21249937,
        name: 'Home United 0 v 1 Albirex Niigata FC',
        displayOrder: 100,
        sort: 'MTCH',
        linkedEventId: 21249693,
        classId: 5,
        className: 'Football',
        typeId: 10003971,
        typeName: 'Football Live',
        linkedEventTypeId: 10005913,
        linkedEventTypeName: 'Singapore S League',
        startTime: '2017-09-19T11:29:23.000Z',
        scores: {
            home: 0,
            away: 1,
        },
        competitors: [
            {
                name: 'Home United',
                position: 'home',
            },
            {
                name: 'Albirex Niigata FC',
                position: 'away',
            },
        ],
        status: {
            active: true,
            started: true,
            live: true,
            resulted: false,
            finished: false,
            cashoutable: true,
            displayable: true,
            suspended: false,
            requestabet: false,
        },
        boostCount: 0,
        superBoostCount: 0,
    },
];

export const market = {
    marketId: 93649179,
    eventId: 21249939,
    name: 'Both Teams To Score',
    displayOrder: -32499,
    type: 'standard',
    status: {
        active: true,
        resulted: false,
        cashoutable: true,
        displayable: true,
        suspended: false,
        noExtraTime: false,
        live: true,
    },
    liabilities: { livePriceLimit: 2500 },
    spAvail: false,
    outcomes: [367528211, 367528215],
};

export const outcomes = [
    {
        outcomeId: 367528211,
        marketId: 93649179,
        eventId: 21249939,
        name: 'Yes',
        displayOrder: 10,
        result: {
            place: 0,
            result: '-',
            favourite: false,
        },
        linkedOutcomeId: 366480089,
        price: {
            decimal: '4.5',
            num: '7',
            den: '2',
        },
        status: {
            active: true,
            resulted: false,
            cashoutable: true,
            displayable: true,
            suspended: true,
            result: '-',
        },
    }, {
        outcomeId: 367528215,
        marketId: 93649179,
        eventId: 21249939,
        name: 'No',
        displayOrder: 20,
        result: {
            place: 0,
            result: '-',
            favourite: false,
        },
        linkedOutcomeId: 366480090,
        price: {
            decimal: '51',
            num: '50',
            den: '1',
        },
        status: {
            active: true,
            resulted: false,
            cashoutable: true,
            displayable: true,
            suspended: true,
            result: '-',
        },
    },
];
